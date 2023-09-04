import React from "react";
import StrikeByYearChart  from "../../Components/Chart/StrikeByYear";
import StrikeByComposition from "../../Components/Chart/StrikeByComposition";


const Summary = () => {
  return <div className="summary-cn">
    <StrikeByYearChart />
    <StrikeByComposition/>
  </div>;
};

export default Summary;
