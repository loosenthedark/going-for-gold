import React from "react";

const SearchInput = () => {
  // STEP 30 = Use the preventDefault method on the form submit event object to prevent the page from refreshing if the user presses the Enter key...
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <h4> Search for a country... </h4> <input type='text' />
    </form>
  );
};

export default SearchInput;
