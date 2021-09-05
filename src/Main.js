import React from "react";

// STEP 13 = Import the Medallists component (which is given access to the global context) within the Landing component...
import Medallists from "./Medallists";

const Main = () => {
  return (
    <main>
      <Medallists />
    </main>
  );
};

export default Main;
