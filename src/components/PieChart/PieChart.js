import React, { useEffect, useState, useRef } from "react";
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

export const Bar = props => {
  // const [data] = useState([200, 250, 60, 150, 100, 175]);
  const svgRef = useRef();
  const { data, width, height } = props;


  useEffect(() => {
    // setting up svg container
    // const w = 400;
    // const h = 300;
    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height)
      .style('overflow', 'visibile')
      .style('margin-top', '75px');

    // setting the scaling
    const xScale = d3.scaleBand()
      .domain(data.map((val, i) => i))
      .range([0, width])
      .padding(0.5);
    const yScale = d3.scaleLinear()
      .domain([0, height])
      .range([height, 0]);

    // setting the axis
    const xAxis = d3.axisBottom(xScale)
      .ticks(data.length);
    const yAxis = d3.axisLeft(yScale)
      .ticks(5);
    svg.append('g')
      .call(xAxis)
      .attr('transform', `translate(0, ${height})`);
    svg.append('g')
      .call(yAxis);

    // setting the svg data
    svg.selectAll('.bar')
      .data(data)
      .join('rect')
        .attr('x', (v, i) => xScale(i))
        .attr('y', yScale)
        .attr('width', xScale.bandwidth())
        .attr('height', val => height - yScale(val));

  }, [data]);

  return (
    <div className="Bar">
      <svg ref={svgRef}></svg>
    </div>
  );
}

export default Bar;