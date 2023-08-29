import React, { useEffect } from "react";
import { useGlobalContext } from "../../context";
import Search from "../../Components/Search";

const Explore = () => {
  const { data, fetchData } = useGlobalContext();
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <Search />
    </div>
  );
};

export default Explore;
