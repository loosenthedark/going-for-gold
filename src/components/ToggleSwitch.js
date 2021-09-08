import React from "react";
import { useGlobalContext } from "../context";
import { FaMedal } from "react-icons/fa";
import { GiPodium } from "react-icons/gi";

const ToggleSwitch = () => {
  const { setToggle, toggledIcon, setToggledIcon } = useGlobalContext();

  const handleToggles = (e) => {
    setToggledIcon(!toggledIcon);
    toggledIcon ? setToggle("golds") : setToggle("total");
  };

  return (
    <div className='container-toggle'>
      <div className='switch'>
        <input
          id='toggle-golds'
          type='radio'
          name='second-switch'
          className={toggledIcon ? "switch-toggled" : null}
          onClick={handleToggles}
        />
        <label htmlFor='toggle-golds'>
          <FaMedal
            className={`icon-medal ${!toggledIcon ? "icon-toggled" : null}`}
          />
        </label>
        <input
          id='toggle-total'
          type='radio'
          name='second-switch'
          className={toggledIcon ? "switch-toggled" : null}
          onClick={handleToggles}
        />
        <label htmlFor='toggle-total'>
          <GiPodium
            className={`icon-podium ${toggledIcon ? "icon-toggled" : null}`}
          />
        </label>
        <span className='toggle-outside'>
          <span className='toggle-inside'></span>
        </span>
      </div>
    </div>
  );
};

export default ToggleSwitch;
