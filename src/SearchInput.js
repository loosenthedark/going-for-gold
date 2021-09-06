import React from "react";

const SearchInput = () => {
  // STEP 31 = Use the preventDefault method on the form submit event object to prevent the page from refreshing if the user presses the Enter key...
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input type='text' placeholder='Search by country...' />
      <div className='search'></div>
    </form>
  );
};

export default SearchInput;
