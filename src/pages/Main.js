import React from "react";
import { useGlobalContext } from "../context";

// Import the Medallists component (which is given access to the global context) within the Landing component...
import Medallists from "../components/Medallists";

const Main = () => {
  const { dark } = useGlobalContext();
  return (
    <main className={dark ? "dark-mode" : null}>
      <Medallists />
    </main>
  );
};

export default Main;
