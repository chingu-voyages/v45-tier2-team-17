import React from 'react'
import { useGlobalContext } from "../../context";
import { PieChart, Pie, Cell, Tooltip } from "recharts";


const StrikeByComposition = () => {

  const { filteredData } = useGlobalContext();
  let compositionMap = {};

  // Colors for Pie chart
  const colors = ['#efc943' ,'#d4d5d4' ];

  const TotalCount = filteredData.length;
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
    strikes: Number (((compositionMap[recclass] /TotalCount ) * 100 ).toFixed(2) )
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
      fill="#d4d5d4"
    >
        {/* {
      compositionData.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={colors[index  > 1? index%colors.length:index ]}/>
      ))
    } */}
    </Pie>
    <Tooltip />
  </PieChart>
  )
}

export default StrikeByComposition