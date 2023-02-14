import React from 'react';
import Chart from "react-apexcharts";

export const DayChart = ({ data }) => {

  const keys = Object.keys(data);
  const values = Object.values(data);
  const strKeys = [];
  const numValues = [];

  keys.forEach(e => {
    strKeys.push([e]);
  });

  values.forEach(e => {
    const numVal = Number(e);
    const twoDec = Number(numVal.toFixed(0));
    numValues.push(twoDec);
  })

  const series =  [{
    name: strKeys,
    data: numValues
  }]

  var options = {
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '95%',
      endingShape: 'rounded',
      borderRadius: 4,
      dataLabels: {
        position: 'bottom',
      },

    },
  },
  tooltip: {
    enabled: false
  },
  dataLabels: {
    enabled: true,
    style: {
      fontSize: '12px',
      colors: ["#5c5b5b"]
    }
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'light',
    },
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