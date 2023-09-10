import React, { useState, useCallback } from "react";
import { useGlobalContext } from "../../context";
import { PieChart, Pie, ResponsiveContainer } from "recharts";
import renderActiveShape from "./RenderActiveShape";

const StrikeByComposition = () => {
  const { filteredData } = useGlobalContext();
  let compositionMap = {};

  // Calculating Number of Strikes Per Year
  filteredData.forEach((element) => {
    let composition = element.recclass;
    if (compositionMap[composition]) {
      compositionMap[composition]++;
    } else {
      compositionMap[composition] = 1;
    }
  });

  // Mapping the composition object into Array data structure
  const compositionData = Object.keys(compositionMap).map((recclass) => ({
    recclass,
    strikes: compositionMap[recclass],
  }));

  // State activeIndex to keeps track of the currently active data point in piechart
  const [activeIndex, setActiveIndex] = useState(0);

  // When a user hovers over a data point in the chart, the onPieEnter callback is called and updates the activeIndex
  // to the index of the hovered data point,
  // which is used to control the rendering of the custom active shape and tooltip within the chart
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );

  return (
    <ResponsiveContainer width="100%" height={495}>
      <PieChart>
        <Pie
          activeIndex={activeIndex}
          activeShape={renderActiveShape}
          data={compositionData}
          innerRadius={100}
          outerRadius={160}
          fill="#888888"
          dataKey="strikes"
          nameKey="recclass"
          onMouseEnter={onPieEnter}
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default StrikeByComposition;
