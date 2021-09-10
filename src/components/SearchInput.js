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
  // if (
  // add loading conditional logic here to prevent constant fetching (while app is also loading) when user scrolls to end...
  //     !loading &&
  //     window.innerHeight + window.scrollY >= document.body.scrollHeight - 2
  //   ) {
  //     setPage((banana) => {
  //       return banana + 1;
  //     });
  //   }
  // });
  // const scrollYAmount = document.documentElement.scrollTop;
  // if (scrollYAmount > 100) {
  //   setScrolled(true);
  // } else if (scrollYAmount <= 100) {
  //   setScrolled(false);
  // }

  // Use the preventDefault method on the form submit event object to prevent the page from refreshing if the user presses the Enter key...
  return (
    <form onSubmit={(e) => e.preventDefault()}>
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
