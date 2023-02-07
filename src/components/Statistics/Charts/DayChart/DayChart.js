import React, { useRef, useEffect } from "react";
import * as d3 from "d3";
import "./DayChart.scss";

export const DayChart = ({ data }) => {
  // console.clear();
  const svgRef = useRef();
// console.log(Object.entries(data))
  useEffect(() => {
    if (Object.entries(data).length < 1) { return };
    const margin = { top: 10, right: 20, bottom: 40, left: 20 };
    const svgWidth = 350;
    const svgHeight = 110;
    const width = svgWidth - margin.left - margin.right;
    const height = svgHeight - margin.top - margin.bottom;

    const svg = d3
      .select(svgRef.current)
      // .select('.container')
      // .append('svg')
      .attr("width", svgWidth)
      .attr("height", svgHeight);

    // dummy data
    // const data = [
    //   { name: "1", value: 40 },
    //   { name: "2", value: 25 },
    //   { name: "3", value: 15 },
    //   { name: "4", value: 10 },
    //   { name: "5", value: 11 },
    //   { name: "6", value: 40 },
    //   { name: "7", value: 25 },
    //   { name: "8", value: 15 },
    //   { name: "9", value: 10 },
    //   { name: "10", value: 11 },
    //   { name: "11", value: 40 },
    //   { name: "12", value: 25 },
    //   { name: "13", value: 15 },
    //   { name: "14", value: 10 },
    //   { name: "15", value: 11 },
    //   { name: "16", value: 40 },
    //   { name: "17", value: 25 },
    //   { name: "18", value: 15 },
    //   { name: "19", value: 10 },
    //   { name: "20", value: 11 },
    //   { name: "21", value: 40 },
    //   { name: "22", value: 25 },
    //   { name: "23", value: 15 },
    //   { name: "24", value: 10 },
    //   { name: "25", value: 11 },
    //   { name: "26", value: 40 },
    //   { name: "27", value: 25 },
    //   { name: "28", value: 15 },
    //   { name: "29", value: 10 },
    //   { name: "30", value: 11 },
    // ];
    // console.log("**********", Object.keys(data))

    const graphArea = svg
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

    const x = d3
      .scaleBand()
      .rangeRound([0, width])
      // .domain(data.map((d) => d.name))
      .domain(Object.keys(data))
      .padding(0.1);

// console.log(data);

    const y = d3
      .scaleLinear()
      .range([height, 0])
      .domain(
        Object.values(data)
        // d3.min(data, (d) =>{ 
        //   console.log("++++++++++++++++++", data);
        //   return d(Object.values(data))
        // }) -5,
        // d3.max(data, (d) => d(Object.values(data))) + 5,
      )
      .nice();

    const xAxis = d3.axisBottom(x);
    const yAxis = d3.axisLeft(y).ticks(5);

    graphArea
      .append("g")
      .attr("class", "axis")
      .attr("transform", `translate(0, ${height})`)
      .call(xAxis);

    graphArea.append("g").attr("class", "axis").call(yAxis);

    const rx = 12;
    const ry = 12;

    const data_ready = Object.entries(data);

    graphArea
      .selectAll("bar")
      .data(data_ready)
      .enter()
      .append("path")
      .style("fill", "#fddc01")
      .attr(
        "d",
        (item) => `
          M${x(item[0])},${y(item[1]) + ry}
          a${rx},${ry} 0 0 1 ${rx},${-ry}
          h${x.bandwidth() - 2 * rx}
          a${rx},${ry} 0 0 1 ${rx},${ry}
          v${height - y(item[1]) - ry}
          h${-x.bandwidth()}Z
        `
      );
  }, [data]);

  return (
    <div className="Bar">
      <svg ref={svgRef}></svg>
    </div>
  );
};

// export const DayChart = () => {
//   const [data] = useState([200, 250, 60, 150, 100, 175]);
//   const svgRef = useRef();

//   useEffect(() => {
//     // setting up svg container
//     const w = 400;
//     const h = 300;
//     const svg = d3.select(svgRef.current)
//       .attr('width', w)
//       .attr('height', h)
//       .style('overflow', 'visibile')
//       .style('margin-top', '75px');

//     const color = d3.scaleOrdinal()
//       .range(["#161747", "#8a89a6", "#297ca6", "#9acce3", "#fddc01", "#e5e8ed", "#6d89e"])

//     // setting the scaling
//     const xScale = d3.scaleBand()
//       .domain(data.map((val, i) => i))
//       .range([0, w])
//       .padding(0.5);
//     const yScale = d3.scaleLinear()
//       .domain([0, h])
//       .range([h, 0]);

//     // setting the axis
//     const xAxis = d3.axisBottom(xScale)
//       .ticks(data.length);
//     const yAxis = d3.axisLeft(yScale)
//       .ticks(5);
//     svg.append('g')
//       .call(xAxis)
//       .attr('transform', `translate(0, ${h})`);
//     svg.append('g')
//       .call(yAxis);

//     // setting the svg data
//     svg.selectAll('.bar')
//       .data(data)
//       .join('rect')
//       .attr('x', (v, i) => xScale(i))
//       .attr('y', yScale)
//       .attr('width', xScale.bandwidth())
//       .attr('height', val => h - yScale(val))
//       .attr('fill', d => { return color([0]) });

//   }, [data]);

//   return (
//     <div className="Bar">
//       <svg ref={svgRef}></svg>
//     </div>
//   );
// }
