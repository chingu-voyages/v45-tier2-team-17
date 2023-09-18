import {
  CLEAR_FILTERS,
  FILTER_DATA,
  GET_DATA_BEGIN,
  GET_DATA_ERROR,
  GET_DATA_SUCCESS,
  UPDATE_FILTERS,
} from "./actions";

const reducer = (state, action) => {
  if (action.type === GET_DATA_BEGIN) {
    return { ...state, isDataLoading: true };
  }
  if (action.type === GET_DATA_ERROR) {
    return { ...state, isDataLoading: false, dataError: true };
  }
  if (action.type === GET_DATA_SUCCESS) {
    const newData = action.payload;
    let newMaxMass = -1;
    let newCompositionOptions = ["all"];
    newData.forEach((item) => {
      if (!isNaN(item.mass)) {
        newMaxMass = Math.max(newMaxMass, item.mass);
      }
      // Extracting year from 'item.year'
      if(item.year && typeof item.year === 'string') {
          const year = item.year.split('-')[0]; // We only take the year part
          item.year = parseInt(year); // Then convert it to a Integer Number
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
  }
  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload;
    return { ...state, filters: { ...state.filters, [name]: value } };
  }
  if (action.type === CLEAR_FILTERS) {
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
  }
  if (action.type === FILTER_DATA) {
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
   
    return { ...state, filteredData: tempData };
  }
};

export default reducer;
