import React from "react";
import StrikeByYearChart  from "../../Components/Chart/StrikeByYear";
import StrikeByComposition from "../../Components/Chart/StrikeByComposition";
import Metrics from "../../Components/Metrics";


const Summary = () => {
  return <div className="summary-cn">
    <Metrics/>
    <h3>No. of Strikes per year</h3>
    <StrikeByYearChart />
    <h3>No. of Strikes By Composition</h3>
    <StrikeByComposition/>
  </div>;
};

export default Summary;
