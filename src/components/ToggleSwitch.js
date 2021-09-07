import React from "react";
import { useGlobalContext } from "../context";
import { FaMedal } from "react-icons/fa";
import { GiPodium } from "react-icons/gi";

const ToggleSwitch = () => {
  const { setToggle, activeBtn, setActiveBtn } = useGlobalContext();

  const handleToggleGold = () => {
    setToggle("golds");
    setTimeout(() => {
      setActiveBtn("golds");
    }, 150);
  };
  const handleToggleTotal = () => {
    setToggle("total");
    setTimeout(() => {
      setActiveBtn("total");
    }, 150);
  };
  return (
    <div className='container-toggle'>
      <div className='wrapper-icon '>
        <button
          className={`flex-centre-j ${
            activeBtn === "golds" ? "btn-active" : null
          }`}
          onClick={handleToggleGold}
        >
          <FaMedal className='icon-medal' />
        </button>{" "}
      </div>{" "}
      <div className='wrapper-icon'>
        <button
          className={`flex-centre-j ${
            activeBtn === "total" ? "btn-active" : null
          }`}
          onClick={handleToggleTotal}
        >
          <GiPodium className='icon-podium' />
        </button>{" "}
      </div>{" "}
    </div>
  );
};

export default ToggleSwitch;
