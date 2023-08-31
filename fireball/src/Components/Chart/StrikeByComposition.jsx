import React from 'react'
import { useGlobalContext } from "../../context";
import { PieChart, Pie, Legend, Tooltip } from "recharts";


const StrikeByComposition = () => {

  const { filteredData } = useGlobalContext();
  let compositionMap = {};

  //   Calculating Number of Strikes Per Year 
  filteredData.forEach(element => {
    let composition = element.recclass ;
    if(compositionMap[composition]){
        compositionMap[composition]++;
    }else{
        compositionMap[composition] = 1;
    } 
  });
  

  //   Mapping the composition object into Array data structure
  const compositionData = Object.keys(compositionMap).map(recclass => ({
    recclass,
    strikes: compositionMap[recclass]
  }));

  console.log(compositionData)

  return (
    <PieChart width={1000} height={400}>
    <Pie
    nameKey="recclass"
      dataKey="strikes"
      data={compositionData}
      cx={500}
      cy={200}
      innerRadius={100}
      outerRadius={180}
      fill="#82ca9d"
    />
    <Tooltip />
  </PieChart>
  )
}

export default StrikeByComposition