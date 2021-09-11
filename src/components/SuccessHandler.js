import React from "react";
import { Link } from "react-router-dom";
import { VscSmiley } from "react-icons/vsc";

const SuccessHandler = () => {
  return (
    <>
      <section className='section-success'>
        <article className='flex-centre-j article-error'>
          <div
            className={`container-flag container-flag-error container-flag-Oceania flex-centre`}
          >
            <div className='wrapper-flag'></div>
          </div>
          <div>
            <h3>Thanks for reaching out!</h3>
            <div>
              <div className='container-buttons-nav container-button-error flex-centre-a'>
                <Link to='/' className='btn btn-landing bg-blue-olympic'>
                  Return Home
                </Link>
              </div>
              <ul>
                <li>
                  <div className='wrapper-rank'>
                    <VscSmiley className='icon-smile' />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default SuccessHandler;
