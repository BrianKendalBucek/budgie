import React from 'react';
import Chart from 'react-apexcharts';

export const MonthCategChart = ({ data }) => {

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

  const series = [{
    data: numValues
  }]

  var options = {
    plotOptions: {
      bar: {
        distributed: true,
        borderRadius: 4,
        horizontal: true,
        barHeight: "85%",
        dataLabels: {
          position: 'bottom',
        },
      }
    },
    
    dataLabels: {
      enabled: true,
      style: {
        fontSize: '12px',
        colors: ["#5c5b5b"]
      }
    },

    legend: {
      show: false,
    },

    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
      },
    },

    tooltip: {
      enabled: false
    },

    theme: {
      palette: 'palette1'
    },

    xaxis: {
      show: false,
      categories: keys,
    },

    yaxis: {
      show: true
    },
  };

  return <Chart options={options}
    type="bar"
    height="150em"
    series={series} />;
}