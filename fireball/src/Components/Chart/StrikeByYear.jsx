import { useGlobalContext } from "../../context";

import {LineChart,Line,XAxis,YAxis,CartesianGrid,Tooltip,Legend,} from "recharts";


const StrikeByYearChart = () => {
  const { filteredData } = useGlobalContext();
  
  let strikeMap = {};

//   Calculating Number of Strikes Per Year
//  
  filteredData.forEach(element => {
    let year = element.year?.slice(0, 4)  ;
    if(strikeMap[year]){
        strikeMap[year]++;
    }else{
        strikeMap[year] = 1;
    } 
  });

//   Mapping the strikeMap object into Array data structure
  const strikeData = Object.keys(strikeMap).map(year => ({
    year,
    strikes: strikeMap[year]
  }));

  console.log(strikeData)

  return (
    <div>
      <LineChart
        width={1000}
        height={500}
        data={strikeData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis dataKey="strikes"/>
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="strikes" stroke="#8884d8" />
      </LineChart>
    </div>
  );
};

export default StrikeByYearChart;
