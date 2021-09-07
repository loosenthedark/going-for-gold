import React from "react";

const NavMenu = () => {
  return (
    <nav>
      <svg className='hamburger Header__toggle-svg' viewBox='0 0 48 48'>
        <g
          stroke='hsl(229, 48%, 24%)'
          strokeWidth='3'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path id='top-line' d='M12,16 L36,16 Z'></path>
          <path id='middle-line' d='M12,24 L36,24 Z'></path>
          <path id='bottom-line' d='M12,32 L36,32 Z'></path>
        </g>
      </svg>
    </nav>
  );
};

export default NavMenu;
