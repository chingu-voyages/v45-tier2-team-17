import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import {
  CLEAR_FILTERS,
  FILTER_DATA,
  GET_DATA_BEGIN,
  GET_DATA_ERROR,
  GET_DATA_SUCCESS,
  UPDATE_FILTERS,
} from "./actions";
import reducer from "./reducer";

const url = "https://data.nasa.gov/resource/gh4g-9sfh.json";
export const AppContext = React.createContext();

const initialFilterState = {
  name: "",
  year: 2023,
  minMass: 0,
  maxMass: 0,
  mass: 0,
  composition: "all",
  compositionOptions: ["all"],
};

const initialState = {
  isDataLoading: false,
  data: [],
  dataError: false,
  filteredData: [],
  filters: initialFilterState,
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async () => {
    dispatch({ type: GET_DATA_BEGIN });
    try {
      const { data } = await axios.get(url);
      console.log(data);
      dispatch({ type: GET_DATA_SUCCESS, payload: data });
    } catch (error) {
      console.log(error.message);
      dispatch({ type: GET_DATA_ERROR });
    }
  };

  const updateFilters = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "year" || name === "mass") {
      value = Number(value);
    }
    dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
  };

  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS });
  };

  const filterData = () => {
    dispatch({ type: FILTER_DATA });
  };

  return (
    <AppContext.Provider
      value={{ ...state, updateFilters, clearFilters, filterData, fetchData }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
