import React, { useState } from "react";

const SearchInput = () => {
  const [scrolled, setScrolled] = useState(false);
  const toggleSearchPos = () => {
    const scrollYAmount = document.documentElement.scrollTop;
    if (scrollYAmount > 300) {
      setScrolled(true);
    } else if (scrollYAmount <= 300) {
      setScrolled(false);
    }
  };
  window.addEventListener("scroll", toggleSearchPos);
  // STEP 31 = Use the preventDefault method on the form submit event object to prevent the page from refreshing if the user presses the Enter key...
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type='text'
        className={scrolled && "search-corner"}
        placeholder='Search by country...'
      />
      <div className={`search ${scrolled && "search-corner"}`}> </div>{" "}
    </form>
  );
};

export default SearchInput;
