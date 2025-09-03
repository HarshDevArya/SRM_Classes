import { useContext } from "react";

import { AppContext } from "../context/AppContext";

export default function Count() {
  const { count, increment, decriment } = useContext(AppContext);
  return (
    <>
      <h1>Count: {count} </h1>
      <button className="px-5  border border-black me-2" onClick={increment}>
        +
      </button>
      <button className="px-5  border border-black" onClick={decriment}>
        -
      </button>
    </>
  );
}
