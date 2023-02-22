import Form from "./Form";
import { UserContext } from "./UserContext";
import { useState } from "react";
export default function App() {
  const [count, setCount] = useState(["TestItem"]);
  return (
    <>
      <UserContext.Provider value={{ count: count, setCount: setCount }}>
        <h1>TODO-List</h1>
        <Form />
      </UserContext.Provider>
    </>
  );
}
