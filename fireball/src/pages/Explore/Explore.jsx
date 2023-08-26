import React, { useEffect } from "react";
import { useGlobalContext } from "../../context";
import Search from "../../Components/Search";

const Explore = () => {
  const { data } = useGlobalContext();
  return (
    <div>
      <Search />
    </div>
  );
};

export default Explore;
