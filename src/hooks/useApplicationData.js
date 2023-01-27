import { useState, useEffect } from "react";
import axios from "axios";

const CATEGORIES_URL = "http://localhost:8888/api/categories/";

export default function useApplicationData() {
  const [state, setState] = useState({
    categories: [
      {
      id: 1,
      user_id: 2,
      name: "food",
    },
    {
      id: 2,
      user_id: 2,
      name: "utilities",
    },
    {
      id: 3,
      user_id: 2,
      name: "entertainment",
    }
  ]
});

  // useEffect(() => {
  //   Promise.all([
  //     axios.get(CATEGORIES_URL + "get_categories_by_id/7")
  //   ]).then((all) => {
  //     console.log(all[0].data)
  //     setState(prev => ({...prev, categories: all[0].data.items}))
  //   }).catch((err) => console.log(err.message, "BOOOOOOOO!"))
  // }, []);

  return {state}
};