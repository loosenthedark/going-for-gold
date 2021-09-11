import React from "react";
import { Link } from "react-router-dom";
import { BsFillQuestionDiamondFill } from "react-icons/bs";
import NavToggler from "../components/NavToggler";

const ErrorHandler = () => {
  return (
    <>
      <NavToggler />
      <section className='section-error'>
        <article className='flex-centre-j article-error'>
          <div
            className={`container-flag container-flag-error container-flag-Asia flex-centre`}
          >
            <div className='wrapper-flag'> </div>{" "}
          </div>{" "}
          <div>
            <h3> Oops! You seem to have lost your way... </h3>{" "}
            <div>
              <div className='container-buttons-nav container-button-error flex-centre-a'>
                <Link to='/' className='btn btn-landing bg-blue-olympic'>
                  Return Home{" "}
                </Link>{" "}
              </div>{" "}
              <ul>
                <li>
                  <div className='wrapper-rank'>
                    <BsFillQuestionDiamondFill className='icon-question' />
                  </div>{" "}
                </li>{" "}
              </ul>{" "}
            </div>{" "}
          </div>{" "}
        </article>{" "}
      </section>{" "}
    </>
  );
};

export default ErrorHandler;
