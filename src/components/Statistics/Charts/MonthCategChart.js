import React from 'react';
import Chart from 'react-apexcharts';
// import './MonthCategChart.scss';

export const MonthCategChart = ({ data }) => {

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
    numValues.push(twoDec);
  })

  const series = [{
    data: numValues
  }]

  
  var options = {
    plotOptions: {
      bar: {
        distributed: true,
        borderRadius: 4,
        horizontal: true,
        barHeight: "85%",
      }
    },
    dataLabels: {
      enabled: false,
      // style: {
      //   colors: ["#707282"]
      // },
    },

    legend: {
      show: false,
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

    theme: {
      palette: 'palette1'
    },

    // fill: {
    //   colors: ["#00bfa5", "#b2bfdb", "#64ffda", "#a7ffeb", "#26a69a", "#4bd6ac"],
    // },
    // type: 'gradient',
    xaxis: {
      show: false,
      categories: keys,
    },

    yaxis: {
      show: true
    },
  };

  return <Chart options={options}
    type="bar"
    // width="300em"
    height="150em"
    series={series} />;
}



  // const keys = Object.keys(data);
  // const values = Object.values(data);

  // console.log("**********************", values)
  // const series = [{
  //   name: 'Monthly Expenditures by Category',
  //   data: values
  // }]
  // var options = {
  //   series: [{
  //     data: values
  //   }],
  // }
  //   chart: {
  //   type: 'bar',
  //   height: 350
  // },
  // plotOptions: {
  //   bar: {
  //     borderRadius: 4,
  //     horizontal: true,
  //   }
  // },
  // dataLabels: {
  //   enabled: false
  // },
  // xaxis: {
  //   categories: keys,
  // }
  // };

// const [bar, setBar] = useState([])
// const svgRef = useRef();
  // set the dimensions and margins of the graph

  // Parse the Data
//   useEffect(() => {
//     if (Object.entries(data).length < 1) { return };
//     const margin = { top: 20, right: 30, bottom: 40, left: 50 },
//       width = 350 - margin.left - margin.right,
//       height = 100 - margin.top - margin.bottom;

//     // append the svg object to the body of the page
//     const svg = d3.select(svgRef.current)
//       // .append("svg")
//       .attr("width", width + margin.left + margin.right)
//       .attr("height", height + margin.top + margin.bottom)
//       .append("g")
//       .attr("transform", `translate(${margin.left}, ${margin.top})`);

//     const color = d3.scaleOrdinal()
//       .range(["#00bfa5", "#b2bfdb", "#64ffda", "#a7ffeb", "#26a69a", "#4bd6ac", "#80cbc4"])

//     // const exampleObj = {car: 12000, groceries: 2000}
//     // Query will combine total costs within each category
//     // const maxValue = Math.max(Object.values(data)); frontend
//     // assuming that data will be key value, and keys(name) value(expenditure values)

//     let arr = Object.values(data);
//     let max = Math.max(...arr);

//     const x = d3.scaleLinear()
//       .domain([0, max])
//       .range([0, width]);
//     svg.append("g")
//       .attr("transform", `translate(0, ${height})`)
//       .call(d3.axisBottom(x))
//       .selectAll("text")
//       .attr("transform", "translate(-0,0)rotate(-45)")
//       .style("text-anchor", "end");
//     // Y axis
//     const y = d3.scaleBand()
//       .range([0, height])
//       .domain(Object.keys(data))
//       .padding(.1);
//     svg.append("g")
//       .call(d3.axisLeft(y))

//     const data_ready = Object.entries(data);

//     //Bars
//     svg.selectAll("myRect")
//       .data(data_ready)
//       .join("rect")
//       .attr("x", x(0))
//       .attr("y", d => { 
//          return y(d[0]) 
//       })
//       .attr("width", d => x(d[1]))
//       .attr("height", y.bandwidth())
//       .attr('fill', d => { return color([0]) })
//     // }).catch((error) => { console.log(error) })
//   }, [data]);

//   return (
//     <div className="Bar">
//       <svg ref={svgRef}></svg>
//     </div>
//   );
// }