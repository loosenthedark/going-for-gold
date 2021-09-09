import React from "react";
import { useParams, Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const SideNav = () => {
  const { isSideNavOpen, closeSideNav } = useGlobalContext();

  const { id } = useParams();

  return (
    <nav className={`flex-centre sidenav ${isSideNavOpen && "show-sidenav"}`}>
      <div className='sidenav-header'>
        {/* <img src={logo} alt='Coding Addict logo' className='logo' /> */}
        {/* <button className='close-btn' onClick={closeSideNav}>
          <FaTimes />
        </button> */}
      </div>
      {/* <ul className='links'>
        <li>Link 1</li>
        <li>Link 2</li>
        <li>Link 3</li> */}
      {/* {links.map((link) => {
          return (
            <li key={link.id}>
              <a href={link.url}>
                {link.icon} {link.text}
              </a>
            </li>
          );
        })} */}
      {/* </ul> */}
      <ul className='container-buttons-nav flex-centre-a'>
        <li>
          <Link
            to='/'
            className='btn btn-landing bg-blue-olympic'
            style={{ opacity: 0.5 }}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to='/'
            className='btn btn-landing bg-black'
            style={{ opacity: 0.5 }}
          >
            Dark Mode
          </Link>
        </li>
        <li>
          <Link
            to='/medallists'
            className='btn btn-landing bg-red'
            style={
              id === "medallists"
                ? {
                    opacity: 1,
                    fontWeight: 600,
                    boxShadow:
                      "0.65rem 0.65rem 0.9rem 0.065rem rgba(0, 0, 0, 0.3)",
                  }
                : { opacity: 0.5 }
            }
          >
            Medallists
          </Link>
        </li>
        <li>
          <Link
            to='/about'
            className='btn btn-landing bg-yellow'
            style={
              id === "about"
                ? {
                    opacity: 1,
                    fontWeight: 600,
                    boxShadow:
                      "0.65rem 0.65rem 0.9rem 0.065rem rgba(0, 0, 0, 0.3)",
                  }
                : { opacity: 0.5 }
            }
          >
            About
          </Link>
        </li>
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
                      "0.65rem 0.65rem 0.9rem 0.065rem rgba(0, 0, 0, 0.3)",
                  }
                : { opacity: 0.5 }
            }
          >
            Contact
          </Link>
        </li>
      </ul>
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
      </ul> */}
    </nav>
  );
};

export default SideNav;
