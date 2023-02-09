import React from 'react';
import Chart from "react-apexcharts";

export const DayChart = ({ data }) => {

  const keys = Object.keys(data);
  const values = Object.values(data);
  // console.log("day keys", keys);
  // console.log("day values", values);

  const series =  [{
    name: keys,
    data: values
  }]

  var options = {
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
      endingShape: 'rounded'
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  xaxis: {
    categories: keys,
  },
  yaxis: {
    labels: {
      formatter: function(val) {
        return val;
      }
    }
  }
  };

  return <Chart options={options}  
  type="bar"
  width="100%"
  height="300em" 
  series={series} />;
}