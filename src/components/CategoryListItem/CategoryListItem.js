import React from "react";
// import classNames from "classnames";
import "./CategoryListItem.scss";

export default function CategoryListItem(props) {

  return (
    <li className="category-item">
      <h2>{props.category}</h2>
    </li>
  );
}