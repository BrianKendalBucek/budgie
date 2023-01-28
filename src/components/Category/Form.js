import React, { useState } from "react";

export default function Form(props) {
  const [category, setCategory] = useState("");

  function reset() {
    setCategory("");
  }

  return (
    <section>
      <form autoComplete="off" onSubmit={(e) => e.preventDefault()}>
        <input
          name="category"
          type="text"
          placeholder="Enter New Category"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        />
        <button
          onClick={() => {
            props.onSave(category);
            reset();
          }}
        >
          Create
        </button>
      </form>
    </section>
  );
}
