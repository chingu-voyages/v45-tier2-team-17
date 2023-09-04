import React, { useEffect } from "react";
import { useGlobalContext } from "../../context";
import Search from "../../Components/Search";
import StrikeByYearChart from "../../Components/Chart/StrikeByYear";

const Explore = () => {
  const { data, fetchData } = useGlobalContext();
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <main style={{ display: "flex", flexGrow: "1" }}>
      <Search />
    </main>
  );
};

export default Explore;
