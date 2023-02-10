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
      endingShape: 'rounded',
      borderRadius: 4,

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

  fill: {
    type: 'gradient',
    gradient: {
      shade: 'light',
      // shadeIntensity: 0.4,
      // inverseColors: false,
      // opacityFrom: 1,
      // opacityTo: 1,
      // stops: [0, 50, 53, 91]
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