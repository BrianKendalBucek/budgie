import React from "react";
import Chart from "react-apexcharts";
// import './PieChart.scss'


// text-transform: capatalize;
export const PieChart = ({ data }) => {
  // useEffect(() => {
  const keys = Object.keys(data);
  const values = Object.values(data);
  const strKeys = [];
  const numValues = [];

  keys.forEach(e => {
    strKeys.push([e]);
  });

  values.forEach(e => {
    const numVal = Number(e);
    const twoDec = Number(numVal.toFixed(2));
    // console.log("numVal", numVal);
    // console.log(typeof twoDec);
    numValues.push(twoDec);
  })


  // const strKeys = [String(keys)];
  console.log("Pie Keys", keys);
  console.log("Pie strKeys", strKeys);
  // console.log("twoDec", twoDec);

  // const numValues = [Number(values)];
  console.log("Pie numValues", numValues)

  // const series = [{
  //   name: "stringy",
  //   data: [1]
  // }]
  var options = {
    chart: {
      width: 380,
      type: 'donut',
      // dataLabels: {
      //   enabled: true,
      //   formatter: function (val) {
      //     return numValues + "%"
      //   },
      //   dropShadow: {
      //     enabled: true,
      //     top: 1,
      //     left: 1,
      //     blur: 1,
      //     color: '#000',
      //     opacity: 0.45
      //   }
      // }
    },
    plotOptions: {
      // pie: {
      //   startAngle: -90,
      //   endAngle: 270,
      //   show: true,
      //   name: {
      //     strKeys,
      //   },
      //   value: {

      //   }
      // }
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
    
    theme: {
      palette: 'palette1'
    },
    legend: false,
    // legend: {
    //   formatter: function(val, opts) {
    //     return keys + " - " + opts.w.globals.series[opts.seriesIndex]
    //   }
    // },
    // title: {
    //   text: 'Gradient Donut with custom Start-angle'
    // },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 300
        },
        // legend: {
        //   position: 'bottom'
        // }
      }
    }]
  };
  return <Chart options={options}
    type="donut"
    // width="100%"
    // height="200em"
    series={numValues}
  />;
  // }, [data]);
}
//   const svgRef = useRef();

//   useEffect(() => {

//     // set the dimensions and margins of the graph
//     const width = 350,
//       height = 150,
//       margin = 20;

//     // The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
//     const radius = Math.min(width, height) / 2 - margin

//     // append the svg object to the div called 'my_dataviz'
//     const svg = d3.select(svgRef.current)
//       // .append("svg")
//       .attr("width", width)
//       .attr("height", height)
//       .append("g")
//       .attr("transform", `translate(${width / 2},${height / 2})`);

//     // set the color scale
//     const color = d3.scaleOrdinal()
//     .range(["#00bfa5", "#b2bfdb", "#64ffda", "#a7ffeb", "#26a69a", "#4bd6ac", "#80cbc4"])

//     // Compute the position of each group on the pie:
//     const pie = d3.pie()
//       .value(d => d[1])

//     const data_ready = pie(Object.entries(data))

//     // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
//     svg
//       .selectAll('whatever')
//       .data(data_ready)
//       .join('path')
//       .attr('d', d3.arc()
//         .innerRadius(70)         // This is the size of the donut hole
//         .outerRadius(radius)
//       )
//       .attr('fill', d => color(d.data[0]))
//       .attr("stroke", "#E5E8ED")
//       .style("stroke-width", "2px")
//       .style("opacity", 0.7)
//     // }
//   }, [data]);

//   return (
//     <div className="Bar">
//       <svg ref={svgRef}></svg>
//     </div>
//   );
// }


// const Arc = ({ data, index, createArc, colors, format }) => (
//   <g key={index} className="arc">
//     <path className="arc" d={createArc(data)} fill={colors(index)} />
//     <text
//       transform={`translate(${createArc.centroid(data)})`}
//       textAnchor="middle"
//       alignmentBaseline="middle"
//       fill="white"
//       fontSize="10"
//     >
//       {format(data.value)} {data.data.name}
//     </text>
//   </g>
// );

// export const Pie = props => {
//   const createPie = d3
//     .pie()
//     .value(d => d.value)
//     .sort(null);
//   const createArc = d3
//     .arc()
//     .innerRadius(props.innerRadius)
//     .outerRadius(props.outerRadius);

//   const colors = d3.scaleOrdinal(d3.schemeYlGnBu[5])
//   const format = d3.format(".2f");
//   const data = createPie(props.data);

//   return (
//     <svg className="pie-chart" width={props.width} height={props.height}>
//       <g transform={`translate(${props.outerRadius} ${props.outerRadius})`}>
//         {data.map((d, i) => (
//           <Arc
//             key={i}
//             data={d}
//             index={i}
//             createArc={createArc}
//             colors={colors}
//             format={format}
//           />
//         ))}
//       </g>
//     </svg>
//   );
// };

/* Pie just used to test chart display. TO BE REMOVED */
/*
      <Pie
      data={data}
      width={400}
      height={400}
      innerRadius={165}
      outerRadius={200}
    />
*/
