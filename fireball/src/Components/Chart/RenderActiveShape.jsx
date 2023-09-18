import React from "react";
import {Sector} from "recharts";


// Function for rendering a customized tooltip and active shape (Arc) for strike by composition piechart
const renderActiveShape = ({cx,cy,midAngle,innerRadius,outerRadius,startAngle,endAngle,fill,payload,percent,value}) => {
  
    // converting degrees to radians.
    const RADIAN = Math.PI / 180;
  
    // These Values are used to determine the position of various elements within the active shape.
    // It calculates coordinates (sx, sy, mx, my, ex, ey) for drawing a line and text within the active shape (Arc)
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 5) * cos;
    const sy = cy + (outerRadius + 5) * sin;
    const mx = cx + (outerRadius + 15) * cos;
    const my = cy + (outerRadius + 15) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 11;
    const ey = my;
    const textAnchor = cos >= 0 ? "start" : "end";
  
    // Returning ARC for active shape with text no. of strikes and composition percent
    return (
      <g>

        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={"#fff"} fontSize={window.innerWidth>650?"1em":'50%'}>
          {payload.recclass}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
        <path
          d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
          stroke={fill}
          fill="none"
        />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="#888" />
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          textAnchor={textAnchor}
          fill="#fff"
        >{`Strikes : ${value}`}</text>
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          dy={18}
          textAnchor={textAnchor}
          fill="#fff"
        >
          {`(${(percent * 100).toFixed(2)}%)`}
        </text>
      </g>
    );
  };


  export default renderActiveShape