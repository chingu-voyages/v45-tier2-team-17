import React ,{useState,useCallback, useEffect} from 'react'
import { useGlobalContext } from "../../context";
import { PieChart, Pie, ResponsiveContainer } from "recharts";
import renderActiveShape from "./RenderActiveShape";

const StrikeByComposition = () => {
  const { filteredData } = useGlobalContext();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

 
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
 

  // This useEffect listens the window resize event and updates the windowWidth state . 
  // This is required so that the Pie chart props innerRadius and outerRadius can be change with windows size
  useEffect(()=>{
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  },[])

  return (

    <>
    <h3 className='composition-h3'>No. of Strikes By Composition</h3>
    <ResponsiveContainer  width="100%"  height={495} className='piechart'> 
    <PieChart  >
      <Pie
        activeIndex={activeIndex}
        activeShape={renderActiveShape}
        data={compositionData}
        cx='50%'
        cy={windowWidth>650 ? '45%':'35%'}
        innerRadius={windowWidth>650 ?'40%' :'30%'}
        outerRadius={windowWidth>650 ? '70%':'50%'}
        fill="#c4af06"
        dataKey="strikes"
        nameKey="recclass"
        stroke='#fff'
        onMouseEnter={onPieEnter}
      />
    </PieChart>
    </ResponsiveContainer>
    </>
  );
};

export default StrikeByComposition;
