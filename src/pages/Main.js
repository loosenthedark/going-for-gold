import React from "react";

// Import the Medallists component (which is given access to the global context) within the Landing component...
import Medallists from "../components/Medallists";

const Main = () => {
  return (
    <main>
      <Medallists />
    </main>
  );
};

export default Main;
