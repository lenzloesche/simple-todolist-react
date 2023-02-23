import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export default function TodoListItem({ index, input, countindex }) {
  const userContext = useContext(UserContext);
  function doDelete(event) {
    let newVariable = userContext.count.slice();
    newVariable.splice(newVariable.length - 1 - countindex, 1);
    userContext.setCount(newVariable);
  }

  return (
    <section className="todo-list-item">
      <h1>List Item {index}</h1>
      <p>{input}</p>
      <button onClick={doDelete}>Delete</button>
    </section>
  );
}
