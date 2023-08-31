import React from "react";
import StrikeByYearChart  from "../../Components/Chart/StrikeByYear";
import StrikeByComposition from "../../Components/Chart/StrikeByComposition";

const Summary = () => {
  return <div>Summary
    <StrikeByYearChart />
    <StrikeByComposition/>
  </div>;
};

export default Summary;
