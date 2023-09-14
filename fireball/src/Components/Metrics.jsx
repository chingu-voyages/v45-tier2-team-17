import React, { useEffect, useState } from 'react'
import { useGlobalContext } from "../context";



const Metrics = () => {

const { filteredData } = useGlobalContext();
const [avgMass , setAvgMass] = useState(0);

const totalStrikes = filteredData.length

useEffect(()=>{
    let totalMass = 0;
    for( let i = 0 ;i<filteredData.length ;i++){
        let mass =  Number (filteredData[i].mass)
        if(mass){
            totalMass += mass
        } 
    }
    let averageMass =  totalStrikes == 0 ? 0:(totalMass / totalStrikes).toFixed(2);
    setAvgMass(averageMass)
},[filteredData])

  return (
    <>
    <h1>
        Total No. of Strikes : {totalStrikes}
    </h1>
    <h1>
       Average Mass : {avgMass}
   </h1>
    </>

  )
}

export default Metrics