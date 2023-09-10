import React from "react";
import StrikeByYearChart  from "../../Components/Chart/StrikeByYear";
import StrikeByComposition from "../../Components/Chart/StrikeByComposition";
import Metrics from "../../Components/Metrics";


const Summary = () => {
  return <div className="summary-cn">
    <Metrics/>
    <StrikeByYearChart />
    <StrikeByComposition/>
  </div>;
};

export default Summary;
