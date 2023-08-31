import React, { useEffect } from "react";
import { useGlobalContext } from "../../context";
import Search from "../../Components/Search";

const Explore = () => {
  const { data, fetchData } = useGlobalContext();
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <main className="explore-page">
        <div>
          <Search />
        </div>
        <div className="main-container">
          <div className="card-container">
            <Card head="Name" />
            <Card head="Meteor Id" />
            <Card head="Year of Strike" />
            <Card head="Mass" />
            <Card head="Rec Class" />
          </div>
          <ScrollBar />
        </div>
      </main>
    </>
  );
};

export default Explore;
