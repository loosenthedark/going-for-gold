import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../context";

const SearchInput = () => {
  const { searchQuery, setSearchQuery, error } = useGlobalContext();
  const [scrolled, setScrolled] = useState(false);
  const toggleSearchPos = () => {
    const scrollYAmount = document.documentElement.scrollTop;
    if (scrollYAmount > 100) {
      setScrolled(true);
    } else if (scrollYAmount <= 100) {
      setScrolled(false);
    }
  };
  // The useEffect hook here listens for a scroll event...
  useEffect(() => {
    const scrollEvent = window.addEventListener("scroll", toggleSearchPos);
    // CLEANUP FN!
    return () => window.removeEventListener("scroll", scrollEvent);
  }, []);

  // Use the preventDefault method on the form submit event object to prevent the page from refreshing if the user presses the Enter key...
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      {error && (
        <div className='input-error'>
          <h6>Please enter at least three letters!</h6>
        </div>
      )}
      <input
        type='text'
        className={scrolled ? "search-corner" : null}
        placeholder='Search by country...'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />{" "}
      <div className={`search ${scrolled && "search-corner"}`}> </div>{" "}
    </form>
  );
};

export default SearchInput;
