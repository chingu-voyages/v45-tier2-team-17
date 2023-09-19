import {
  CLEAR_FILTERS,
  FILTER_DATA,
  GET_DATA_BEGIN,
  GET_DATA_ERROR,
  GET_DATA_SUCCESS,
  UPDATE_FILTERS,
} from "./actions";

const handleGetDataBegin = (state) => {
  return { ...state, isDataLoading: true };
};

const handleGetDataError = (state) => {
  return { ...state, isDataLoading: false, dataError: true };
};

const handleGetDataSuccess = (state, action) => {
  const newData = action.payload;
  let newMaxMass = -1;
  let newCompositionOptions = ["all"];
  newData.forEach((item) => {
    if (!isNaN(item.mass)) {
      newMaxMass = Math.max(newMaxMass, item.mass);
    }
    if(item.year && typeof item.year === 'string') {
      const year = item.year.split('-')[0];
      item.year = parseInt(year);
    }
    if (!newCompositionOptions.includes(item.recclass)) {
      newCompositionOptions.push(item.recclass);
    }
  });
  return {
    ...state,
    isDataLoading: false,
    dataError: false,
    data: newData,
    filteredData: newData,
    filters: {
      ...state.filters,
      maxMass: newMaxMass,
      mass: newMaxMass,
      compositionOptions: newCompositionOptions,
    },
  };
};

const handleUpdateFilters = (state, action) => {
  const { name, value } = action.payload;
  return { ...state, filters: { ...state.filters, [name]: value } };
};

const handleClearFilters = (state) => {
  return {
    ...state,
    filters: {
      ...state.filters,
      name: "",
      year: 2023,
      minMass: 0,
      mass: state.filters.maxMass,
      composition: "",
    },
  };
};

const handleFilterData = (state) => {
  const { data, filters } = state;
  const { name, year, mass, maxMass, composition } = filters;
  let tempData = [...data];
  
  if (name) {
    tempData = tempData.filter((item) =>
      item.name.toLowerCase().includes(name.toLowerCase())
    );
  }

  if (composition && composition !== "all") {
    tempData = tempData.filter(
      (item) => item.recclass.toLowerCase() === composition.toLowerCase()
    );
  }
  if (mass !== maxMass) {
    tempData = tempData.filter((item) => item.mass <= mass);
  }
  if (year < 2023) {
    tempData = tempData.filter(
      (item) => item.year <= year
    );
  }
  console.log({tempData})
  
  return { ...state, filteredData: tempData };
};

const reducer = (state, action) => {
  switch (action.type) {
    case GET_DATA_BEGIN:
      return handleGetDataBegin(state);
    case GET_DATA_ERROR:
      return handleGetDataError(state);
    case GET_DATA_SUCCESS:
      return handleGetDataSuccess(state, action);
    case UPDATE_FILTERS:
      return handleUpdateFilters(state, action);
    case CLEAR_FILTERS:
      return handleClearFilters(state);
    case FILTER_DATA:
      return handleFilterData(state);
    default:
      return state;
  }
};

export default reducer;