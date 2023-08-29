import React from "react";
import Card from "../../Components/Card/Card";
import "../../sass/_card.scss";
import "../../sass/_explore.scss";
import ScrollBar from "../../Components/ScrollBar/ScrollBar";
const Explore = () => {
  return (
    <main className="explore-page">
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
  );
};

export default Explore;
