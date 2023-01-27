import { useState } from "react";
import { Pie } from "../PieChart/PieChart";




export function Statistics (){


  const [data, setData] = useState([{name: "CAD", value: 43}, {name: "USD", value: 412}, {name: "EUR", value: 665}, {name: "GBP", value: 123}])
  return (

    <div>

      <Pie
        data={data}
        width={400}
        height={400}
        innerRadius={165}
        outerRadius={200}
      />
    </div>
  )

}