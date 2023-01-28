import React from "react";
import CategoryListItem from "../CategoryListItem/CategoryListItem";

export default function CategoryList(props) {
  const categories = props.categories.map((category) => {
    return <CategoryListItem key={category.id} category={category.name} />;
  });

  return <ul>{categories}</ul>;
}
