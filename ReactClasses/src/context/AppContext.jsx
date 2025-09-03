import { createContext, useState } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [count, setcount] = useState(1);

  const increment = function () {
    setcount((count) => count + 1);
  };

  const decriment = function () {
    setcount((count) => count - 1);
  };

  return (
    <AppContext.Provider value={{ count, increment, decriment }}>
      {children}
    </AppContext.Provider>
  );
}
