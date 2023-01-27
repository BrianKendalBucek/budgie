import React, {useState} from "react";

export default function Form(props) {
  const [list, setList] = useState("");
  const [category, setCategory] = useState(list);
  // need to add to categories, 
  /*  state : {
      categories: [{ id, user_id, name....}]
    }
    // on form Submit need to update DB -> axios.post(URL, {user_id, name})
*/
// ****************
// const [updated, setUpdated] = useState(message);

//   const handleChange = (event) => {
//     setMessage(event.target.value);
//   };

//   const handleClick = () => {
//     // 👇 "message" stores input field value
//     setUpdated(message);
//   };

// return (
//   <div>
//     <input
//       type="text"
//       id="message"
//       name="message"
//       onChange={handleChange}
//       value={message}
//     />
// ****************

function handleClick() {
  console.log()
}

// const newList = [...props.state.categories, e.target.value];

return (
  <section>
        <form autoComplete="off" onSubmit={event => event.preventDefault()}>
          <input
            name="category"
            type="text"
            placeholder="Enter New Category"
            value={category}
            onChange={e => {
              console.log(e.target.value) 
              setCategory(e.target.value)
            // onSubmit=
            }}
          />
          <button onClick={handleClick}>Create</button>
        </form>
      </section>
  );  
}

// https://codingbeautydev.com/blog/react-get-input-value-on-button-click/#:~:text=Get%20value%20of%20uncontrolled%20input,value%20in%20the%20event%20handler.