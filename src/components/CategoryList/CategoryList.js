import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import axios from 'axios';
import "./CategoryList.scss";

export function CategoryList(props) {

  const [category, setCategory] = useState([]);
  const [newCategory, setNewCategory] = useState('');

  const getCategories = () => {
    return axios.get("http://localhost:3002/api/categories/get_categories_by_id/3").then((res) => {
      setCategory(res.data)
    })
  }

  useEffect(() => {
    getCategories();
  }, []);

  const categories = category.map(category => {
    return <li className="category-name" key={category.id}>
      {category.name}
    </li>
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    return axios.post("http://localhost:3002/api/categories", { categoryName: newCategory, id: 3 }).then((res) => {
    getCategories();
    })
  }

  return (
    <>
      <Header viewTitle={props.viewTitle} />

      <div>
        <h4>Categories</h4>
        <ul>
          {categories}
        </ul>
      </div>
      <div className="form">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="input-container">
            <label>Category</label>
            <input
              onChange={(e) => setNewCategory(e.target.value)}
              value={newCategory}
              autoComplete="false"
              // type='categories'
              name='categories'
              required
            />
            <div className="button-container">
              <button type='submit'>Create Category</button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
};
