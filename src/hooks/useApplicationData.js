import { useState, useEffect } from "react";
import axios from "axios";

const CATEGORIES_URL = "http://localhost:8888/api/categories/";

export default function useApplicationData() {
  const [state, setState] = useState({
    user_id: 10,
    categories: [],
  });

  useEffect(() => {
    Promise.all([axios.get("http://localhost:3002/api/cat/all/11")])
      .then((all) => {
        // console.log(all[0].data);
        setState((prev) => ({ ...prev, categories: all[0].data }));
      })
      .catch((err) => console.log(err.message, "BOOOOOOOO!"));
  }, []);

  async function CreateNewCategory(name) {
    const userID = state.categories[0].user_id;

    await axios.post(`http://localhost:3002/api/cat/${userID}`, {
      name,
      userID,
    });

    const res2 = await axios.get("http://localhost:3002/api/cat/all/11");
    const { data } = res2;
    setState((prev) => ({ ...prev, categories: data }));
  }
  return { state, CreateNewCategory };
}
