import React, { useState } from "react";
import "./App.css";

export default function MainRunner() {
  const [toDo, setToDo] = useState([]); // Use camel case for variable names (setToDo instead of settoDo)
  const [text, setText] = useState(""); // State to store the input text

  function add(e) {
    setText(e.target.value); // Update the text state with the input value
  }

  function handleSubmit() {
    if (text.trim() !== "") {
      // Only add non-empty values to the to-do list
      setToDo([...toDo, text]); // Add the current input text to the to-do list
      setText(""); // Clear the input text
    }
  }

  function handleDelete(index) {
    const updatedToDo = [...toDo];
    updatedToDo.splice(index, 1);
    setToDo(updatedToDo);
  }

  const toDoList = toDo.map((item, indexs) => (
    <li key={indexs}>
      {item}
      <button onClick={() => handleDelete(indexs)}>X</button>
    </li>
  ));

  // Generate the list items using the toDo array

  return (
    <div className="cen">
      <input
        placeholder="write something"
        value={text}
        autoFocus
        onChange={add}
      />
      <br />
      {/*console.log(toDo)*/}

      <center>
        <button onClick={handleSubmit}>submit</button>
      </center>
      <br></br>
      <label for="fname">Shopping list</label>
      <ol>{toDoList}</ol>
    </div>
  );
}
