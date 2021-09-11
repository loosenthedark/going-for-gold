import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../context";

const SideNav = () => {
  const { isSideNavOpen, closeSideNav, dark, setDark, setToggledIcon } =
    useGlobalContext();

  const handleDark = () => {
    setDark(!dark);
    closeSideNav();
  };

  const { id } = useParams();

  useEffect(() => {
    id !== "medallists" && setToggledIcon(false);
  }, [id]);

  return (
    <nav
      onClick={closeSideNav}
      className={`flex-centre sidenav ${isSideNavOpen && "show-sidenav"}`}
    >
      <button
        className='button-nav flex-centre button-close'
        onClick={closeSideNav}
      >
        {" "}
        <FaTimes />{" "}
      </button>{" "}
      <ul className='container-buttons-nav flex-centre-a'>
        <li>
          <Link
            to='/'
            className='btn btn-landing bg-blue-olympic'
            style={{ opacity: 0.4 }}
          >
            Home{" "}
          </Link>{" "}
        </li>{" "}
        <li>
          <button
            className='btn btn-landing bg-black'
            onClick={handleDark}
            style={{ opacity: 0.4 }}
          >
            Dark Mode{" "}
          </button>{" "}
        </li>{" "}
        <li>
          <Link
            to='/about'
            className='btn btn-landing bg-red'
            style={
              id === "about"
                ? {
                    opacity: 1,
                    fontWeight: 600,
                    boxShadow:
                      "0.65rem 0.65rem 0.9rem 0.065rem rgba(32, 43, 91, 0.5)",
                  }
                : { opacity: 0.4 }
            }
          >
            About{" "}
          </Link>{" "}
        </li>{" "}
        <li>
          <Link
            to='/medallists'
            className='btn btn-landing bg-yellow'
            style={
              id === "medallists"
                ? {
                    opacity: 1,
                    fontWeight: 600,
                    boxShadow:
                      "0.65rem 0.65rem 0.9rem 0.065rem rgba(32, 43, 91, 0.5)",
                  }
                : { opacity: 0.4 }
            }
          >
            Medallists{" "}
          </Link>{" "}
        </li>{" "}
        <li>
          <Link
            to='/contact'
            className='btn btn-landing bg-green'
            style={
              id === "contact"
                ? {
                    opacity: 1,
                    fontWeight: 600,
                    boxShadow:
                      "0.65rem 0.65rem 0.9rem 0.065rem rgba(32, 43, 91, 0.5)",
                  }
                : { opacity: 0.4 }
            }
          >
            Contact{" "}
          </Link>{" "}
        </li>{" "}
      </ul>{" "}
      {/* <ul className='social-icons'>
                                {social.map((link) => {
                                  return (
                                    <li key={link.id}>
                                      <a target='_blank' rel='noopener noreferrer' href={link.url}>
                                        {link.icon}
                                      </a>
                                    </li>
                                  );
                                })}
                              </ul> */}{" "}
    </nav>
  );
};

export default SideNav;
