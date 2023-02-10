import React from "react";
import Chart from "react-apexcharts";

export const ProgressBar = ( {data} ) => {
  console.log("data", data)
  var options = {
    chart: {
      type: 'radialBar',
      offsetY: -20,
      sparkline: {
        enabled: true
      }
    },
    colors: [function({ value, seriesIndex, w }) {
      console.log(value)
      // const dataNum = Number(data);
      // console.log(dataNum)
      if (value < 100) {
        return 'blue'
      } else {
        return 'red'
      }
    }],
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        track: {
          background: "#e7e7e7",
          strokeWidth: '97%',
          margin: 5, // margin is in pixels
          dropShadow: {
            enabled: true,
            top: 2,
            left: 0,
            color: '#999',
            opacity: 1,
            blur: 2
          }
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            offsetY: -2,
            fontSize: '22px',
          },
        }
      }
    },
    grid: {
      padding: {
        top: -10
      }
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
  };
  return <Chart options={options}
    type="radialBar"
    series={[data]}
  />;
}