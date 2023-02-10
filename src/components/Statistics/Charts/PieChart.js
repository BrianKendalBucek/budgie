import React from "react";
import Chart from "react-apexcharts";

export const PieChart = ({ data }) => {

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

  var options = {
    chart: {
      width: 380,
      type: 'donut',
    },

    dataLabels: {
      enabled: true,
    },

    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        shadeIntensity: 0.4,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 53, 91]
      },
    },
    tooltip: {
      enabled: false
    },

    theme: {
      palette: 'palette1'
    },

    legend: false,

    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 300
        },
      }
    }]
  };
  return <Chart options={options}
    type="donut"
    series={numValues}
  />;
}