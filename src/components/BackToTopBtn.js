import React, { useState } from "react";
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

  window.addEventListener("scroll", toggleVisible);

  return (
    <FaChevronCircleUp
      className='btn-back-to-top'
      onClick={scrollToTop}
      style={{ display: visible ? "inline" : "none" }}
    />
  );
};

export default BackToTopBtn;
