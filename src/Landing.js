import React from "react";
import { useGlobalContext } from "./context";

// STEP 13 = Import the Search and Medallists components (both of which are given access to the global context) within the Landing component...
import Search from "./SearchInput";
import Medallists from "./Medallists";

const Landing = () => {
  const testData = useGlobalContext();
  // console.log(testData.medallists);

  return (
    <main>
      <h2>Landing component</h2>
      <Search />
      <Medallists />
    </main>
  );
};

export default Landing;
