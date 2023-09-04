import React from "react";
import StrikeByYearChart  from "../../Components/Chart/StrikeByYear";
import StrikeByComposition from "../../Components/Chart/StrikeByComposition";


const Summary = () => {
  return <div className="summary-cn">
    <h1>No. of Strikes per year</h1>
    <StrikeByYearChart />
    <h1>No. of Strikes By Composition</h1>
    <StrikeByComposition/>
  </div>;
};

export default Summary;
