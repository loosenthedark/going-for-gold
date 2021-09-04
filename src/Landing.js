import React from "react";

// STEP 13 = Import Search component (which will have access to the global context) within the Landing component...
import Search from "./SearchInput";

const Landing = () => {
  return (
    <main>
      <h2>Landing component</h2>
      <Search />
    </main>
  );
};

export default Landing;
