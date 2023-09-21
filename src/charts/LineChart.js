import React from 'react';
import {Chart} from 'react-google-charts'

export const data = [
    ["Mois", "paiement"],
    ["Janvier", 11],
    ["février", 2],
    ["avril", 2],
    ["mai", 2],
    ["juin", 7],
    ["juillet", 7],
    ["août", 7],
    ["septembre", 7],
    ["octobre", 7],
    ["novembre ", 7],
    ["décembre ", 7],
    
  ];
  export const options = {
    title: "",
  };

const Charts = () => {
  return (
    <Chart
    chartType="LineChart"
    data={data}
    //options={options}
    width={"100%"}
    height={"100%"}
  />
  )
}

export default Charts