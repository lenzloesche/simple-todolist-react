import { createContext } from "react";

const defaultValue = {
  test: "value",
};

const UserContext = createContext(defaultValue);
export { UserContext };
