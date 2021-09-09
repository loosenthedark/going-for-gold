import React from "react";
import { Link } from "react-router-dom";
import Animation from "../components/Animation";

const Landing = () => {
  // Landing page Olympic rings GSAP SVG animation adapted from Steve Gardner's CodePen: https://codepen.io/ste-vg/details/kXzXYW Some of his source code is refactored here to make it more ES6-compliant
  return (
    <>
      <Animation />
      <div className='container-buttons flex-centre-a'>
        <Link to='/medallists' className='btn btn-landing bg-gold'>
          Medallists
        </Link>
        <Link to='/about' className='btn btn-landing bg-silver'>
          About
        </Link>
        <Link to='/contact' className='btn btn-landing bg-bronze'>
          Contact
        </Link>
      </div>
    </>
  );
};

export default Landing;
