import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../context";

const SearchInput = () => {
  const { searchQuery, setSearchQuery, medalCountries, error } =
    useGlobalContext();
  const [scrolled, setScrolled] = useState(false);
  const toggleSearchPos = () => {
    const scrollYAmount = document.documentElement.scrollTop;
    if (scrollYAmount > 100) {
      setScrolled(true);
    } else if (scrollYAmount <= 100) {
      setScrolled(false);
    }
  };
  window.addEventListener("scroll", toggleSearchPos);

  // console.log(medalCountries);

  useEffect(() => {
    console.log(searchQuery);
  }, [searchQuery]);
  // STEP 31 = Use the preventDefault method on the form submit event object to prevent the page from refreshing if the user presses the Enter key...
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type='text'
        className={scrolled ? "search-corner" : null}
        placeholder='Search by country...'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className={`search ${scrolled && "search-corner"}`}> </div>{" "}
    </form>
  );
};

export default SearchInput;
