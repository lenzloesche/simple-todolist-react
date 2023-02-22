import React, { useContext } from "react";
import { UserContext } from "./UserContext";
export default function TodoListItem({ index, input, countindex }) {
  const userContext = useContext(UserContext);
  function doDelete(event) {
    userContext.count.slice(countindex, 1);
    userContext.setCount(userContext.count);
    console.log(userContext);
  }

  return (
    <section className="todo-list-item">
      <h1>List Item {index}</h1>
      <p>{input}</p>
      <button onClick={doDelete}>Delete</button>
    </section>
  );
}
