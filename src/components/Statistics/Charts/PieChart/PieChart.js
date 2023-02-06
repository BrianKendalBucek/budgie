import React, { useEffect, useState, useRef } from "react";
import * as d3 from "d3";
import './PieChart.scss'

// Data for testing and reminder for object structure
// const data = [{name: "CAD", value: 43}, {name: "USD", value: 412}, {name: "EUR", value: 665}, {name: "GBP", value: 123}];

export const PieChart = ({ data }) => {

  const svgRef = useRef();

  // useEffect(() => {

      // set the dimensions and margins of the graph
      const width = 150,
        height = 150,
        margin = 10;

      // The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
      const radius = Math.min(width, height) / 2 - margin

      // append the svg object to the div called 'my_dataviz'
      const svg = d3.select(svgRef.current)
        // .append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", `translate(${width / 2},${height / 2})`);

      // set the color scale
      const color = d3.scaleOrdinal()
        .range(["#161747", "#8a89a6", "#297ca6", "#9acce3", "#fddc01", "#e5e8ed", "#6d89e"])

      // Compute the position of each group on the pie:
      const pie = d3.pie()
        .value(d => d[1])

      const data_ready = pie(Object.entries(data))

      // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
      svg
        .selectAll('whatever')
        .data(data_ready)
        .join('path')
        .attr('d', d3.arc()
          .innerRadius(30)         // This is the size of the donut hole
          .outerRadius(radius)
        )
        .attr('fill', d => color(d.data[0]))
        .attr("stroke", "black")
        .style("stroke-width", "2px")
        .style("opacity", 0.7)
    // }
  // }, [data]);

  return (
    <div className="Bar">
      <svg ref={svgRef}></svg>
    </div>
  );
}


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
