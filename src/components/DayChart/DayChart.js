import React, { useState, useRef, useEffect } from 'react';
import * as d3 from 'd3';
import './DayChart.scss';

export const DayChart = () => {
  const [data] = useState([200, 250, 60, 150, 100, 175]);
  const svgRef = useRef();

  useEffect(() => {
    // setting up svg container
    const w = 400;
    const h = 300;
    const svg = d3.select(svgRef.current)
      .attr('width', w)
      .attr('height', h)
      .style('overflow', 'visibile')
      .style('margin-top', '75px');

    const color = d3.scaleOrdinal()
      .range(["#161747", "#8a89a6", "#297ca6", "#9acce3", "#fddc01", "#e5e8ed", "#6d89e"])


    // setting the scaling
    const xScale = d3.scaleBand()
      .domain(data.map((val, i) => i))
      .range([0, w])
      .padding(0.5);
    const yScale = d3.scaleLinear()
      .domain([0, h])
      .range([h, 0]);

    // setting the axis
    const xAxis = d3.axisBottom(xScale)
      .ticks(data.length);
    const yAxis = d3.axisLeft(yScale)
      .ticks(5);
    svg.append('g')
      .call(xAxis)
      .attr('transform', `translate(0, ${h})`);
    svg.append('g')
      .call(yAxis);

    // setting the svg data
    svg.selectAll('.bar')
      .data(data)
      .join('rect')
      .attr('x', (v, i) => xScale(i))
      .attr('y', yScale)
      .attr('width', xScale.bandwidth())
      .attr('height', val => h - yScale(val))
      .attr('fill', d => { return color([0]) });
      
  }, [data]);

  return (
    <div className="Bar">
      <svg ref={svgRef}></svg>
    </div>
  );
}