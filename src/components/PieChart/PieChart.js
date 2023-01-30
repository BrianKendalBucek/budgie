import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import './PieChart.scss'

// Data for testing and reminder for object structure
// const data = [{name: "CAD", value: 43}, {name: "USD", value: 412}, {name: "EUR", value: 665}, {name: "GBP", value: 123}];


const Arc = ({ data, index, createArc, colors, format }) => (
  <g key={index} className="arc">
    <path className="arc" d={createArc(data)} fill={colors(index)} />
    <text
      transform={`translate(${createArc.centroid(data)})`}
      textAnchor="middle"
      alignmentBaseline="middle"
      fill="white"
      fontSize="10"
    >
      {format(data.value)} {data.data.name}
    </text>
  </g>
);

export const Pie = props => {
  const createPie = d3
    .pie()
    .value(d => d.value)
    .sort(null);
  const createArc = d3
    .arc()
    .innerRadius(props.innerRadius)
    .outerRadius(props.outerRadius);

  const colors = d3.scaleOrdinal(d3.schemeYlGnBu[5])
  const format = d3.format(".2f");
  const data = createPie(props.data);

  return (
    <svg className="pie-chart" width={props.width} height={props.height}>
      <g transform={`translate(${props.outerRadius} ${props.outerRadius})`}>
        {data.map((d, i) => (
          <Arc
            key={i}
            data={d}
            index={i}
            createArc={createArc}
            colors={colors}
            format={format}
          />
        ))}
      </g>
    </svg>
  );
};




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