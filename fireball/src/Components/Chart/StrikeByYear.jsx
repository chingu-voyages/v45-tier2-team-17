import { useGlobalContext } from "../../context";

import {LineChart,Line,XAxis,YAxis,CartesianGrid,Tooltip,Legend,ResponsiveContainer} from "recharts";


const StrikeByYearChart = () => {
  const { filteredData } = useGlobalContext();
  
  let strikeMap = {};

//   Calculating Number of Strikes Per Year 
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
    <>
    <h3 className="year-h3">No. of Strikes per year</h3>
    <ResponsiveContainer  width="70%"  height={495} > 
      <LineChart     
        data={strikeData}
        margin={{ top: 5, right: 30, left: 15, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year"/>
        <YAxis dataKey="strikes" label={{ value: 'No. Of Strikes', angle: -90, position: 'insideLeft' , fontSize: 15}}/>
        <Tooltip />
        <Legend verticalAlign="bottom" iconType="plainline"/>
        <Line type="monotone" dataKey="strikes" stroke="#E8E251" activeDot={{ r: 4 }}  />
      </LineChart>
     </ResponsiveContainer>
     </>
  );
};

export default StrikeByYearChart;
