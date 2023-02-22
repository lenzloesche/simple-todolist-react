import TodoListItem from "./TodoListItem";
import { useContext } from "react";
import { UserContext } from "./UserContext";

export default function Form() {
  /* const [count, setCount] = useState(["TestItem"]); */
  let userContext = useContext(UserContext);
  function onSubmit(even) {
    even.preventDefault();
    const listItemValue = even.target[0].value;
    const newArray = [...userContext.count, [listItemValue]];
    userContext.setCount(newArray);
    even.target.reset();
    even.target[0].focus();
  }
  function newTodoListItem(text, index, countindex) {
    return (
      <TodoListItem
        index={index}
        key={index}
        input={text}
        countindex={countindex}
      />
    );
  }
  return (
    <>
      {" "}
      <form action="submit" onSubmit={onSubmit}>
        <label htmlFor="input">Write your Todo! </label>
        <textarea type="text" id="input" />
        <button>Create new Item</button>
      </form>
      <div className="todo-list">
        {userContext.count
          .slice(0)
          .reverse()
          .map((text, index) =>
            newTodoListItem(text, userContext.count.length - index, index)
          )}
      </div>
    </>
  );
}
