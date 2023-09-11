import React from "react";
import StrikeByYearChart from "../../Components/Chart/StrikeByYear";
import StrikeByComposition from "../../Components/Chart/StrikeByComposition";
import Metrics from "../../Components/Metrics";
import { useGlobalContext } from "../../context";

const Summary = () => {
  const { filteredData } = useGlobalContext();

  return (
    <div className="summary-cn">
      {filteredData.length > 0 ? (
        <>
          <Metrics />
          <StrikeByYearChart />
          <StrikeByComposition />
        </>
      ) : (
        <h1 className="no-summary-h1">
          Sorry, we couldn't find any meteorite strikes for your search query.
        </h1>
      )}
    </div>
  );
};

export default Summary;
