import React from "react";

// STEP 13 = Import the Search and Medallists components (both of which are given access to the global context) within the Landing component...
import Search from "./SearchInput";
import Medallists from "./Medallists";

const Landing = () => {
  return (
    <main>
      <Search />
      <Medallists />
    </main>
  );
};

export default Landing;
