import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import './MonthCategChart.scss';

export const MonthCategChart = ({ data }) => {
  // const [bar, setBar] = useState([])
  const svgRef = useRef();
  // set the dimensions and margins of the graph

  // Parse the Data
  useEffect(() => {
    if (Object.entries(data).length < 1) { return };
    const margin = { top: 20, right: 30, bottom: 40, left: 40 },
      width = 350 - margin.left - margin.right,
      height = 100 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    const svg = d3.select(svgRef.current)
      // .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

    const color = d3.scaleOrdinal()
      .range(["#161747", "#8a89a6", "#297ca6", "#9acce3", "#fddc01", "#6d89e"])

    // const exampleObj = {car: 12000, groceries: 2000}
    // Query will combine total costs within each category
    // const maxValue = Math.max(Object.values(data)); frontend
    // assuming that data will be key value, and keys(name) value(expenditure values)

    let arr = Object.values(data);
    let max = Math.max(...arr);

    const x = d3.scaleLinear()
      .domain([0, max])
      .range([0, width]);
    svg.append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(d3.axisBottom(x))
      .selectAll("text")
      .attr("transform", "translate(-0,0)rotate(-45)")
      .style("text-anchor", "end");
    // Y axis
    const y = d3.scaleBand()
      .range([0, height])
      .domain(Object.keys(data))
      .padding(.1);
    svg.append("g")
      .call(d3.axisLeft(y))

    const data_ready = Object.entries(data);

    //Bars
    svg.selectAll("myRect")
      .data(data_ready)
      .join("rect")
      .attr("x", x(0))
      .attr("y", d => { 
         return y(d[0]) 
      })
      .attr("width", d => x(d[1]))
      .attr("height", y.bandwidth())
      .attr('fill', d => { return color([0]) })
    // }).catch((error) => { console.log(error) })
  }, [data]);

  return (
    <div className="Bar">
      <svg ref={svgRef}></svg>
    </div>
  );
}