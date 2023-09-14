import React from 'react';
import {Chart} from 'react-google-charts'

export const data = [
    ["", ""],
    ["", 11],
    ["", 2],
    ["", 2],
    ["", 2],
    ["", 7],
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