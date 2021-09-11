import React from "react";
import { useGlobalContext } from "../context";

const NavToggler = () => {
  const { openSideNav } = useGlobalContext();

  return (
    <button className='button-nav flex-centre' onClick={openSideNav}>
      {/* Hamburger icon SVG adapted from Cassie Evans' CodePen: https://codepen.io/cassie-codes/pen/ExgXNWY */}
      <svg className='hamburger' viewBox='0 0 48 48'>
        <g
          stroke='currentcolor'
          strokeWidth='3'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path id='top-line' d='M12,16 L36,16 Z'></path>
          <path id='middle-line' d='M12,24 L36,24 Z'></path>
          <path id='bottom-line' d='M12,32 L36,32 Z'></path>
        </g>
      </svg>
    </button>
  );
};

export default NavToggler;
