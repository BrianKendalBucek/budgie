import Form from "./Form";
import CategoryList from "./CategoryList";

export default function Category(props) {
  async function newCat(name) {
    try {
      await props.CreateNewCategory(name);
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <>
      <Form onSave={newCat} />
      <CategoryList categories={props.categories} />
    </>
  );
}
