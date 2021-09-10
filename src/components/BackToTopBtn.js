import React, { useState, useEffect } from "react";
import { FaChevronCircleUp } from "react-icons/fa";

const BackToTopBtn = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 500) {
      setVisible(true);
    } else if (scrolled <= 500) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // window.addEventListener("scroll", toggleVisible);

  // The useEffect hook here listens for a scroll event...
  useEffect(() => {
    const scrollEvent = window.addEventListener("scroll", toggleVisible);
    // CLEANUP FN!
    return () => window.removeEventListener("scroll", scrollEvent);
  }, []);

  return (
    <FaChevronCircleUp
      className='btn-back-to-top'
      onClick={scrollToTop}
      style={{ opacity: visible ? "1" : "0" }}
    />
  );
};

export default BackToTopBtn;
