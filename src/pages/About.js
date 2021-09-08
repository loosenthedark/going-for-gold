import React from "react";
import { Link } from "react-router-dom";
import Nav from "../components/NavMenu";

const About = () => {
  return (
    <>
      <div className='container-about'>
        <Nav />
        <div className='overlay-about flex-centre trbl-0'> </div>{" "}
        <div className='overlay-about-text flex-centre trbl-0'>
          <h1>
            <Link to='/'> Going for Gold! </Link>{" "}
          </h1>{" "}
          <p>
            Unfolding in the wake of a global pandemic, the Tokyo 2020 Olympics
            were a Games like no other.{" "}
          </p>{" "}
          <p>
            Now <Link to='/'> Going for Gold </Link> has compiled an Olympic
            medal count like no other, bringing users a uniquely fair and
            balanced statistical perspective.{" "}
          </p>{" "}
          <p>
            By offering an alternative medals breakdown - ranking countries in
            relative(per capita) rather than absolute terms - we hope to
            challenge people 's attitudes and{" "}
            <a
              href='https://yourbias.is/the-framing-effect'
              target='_blank'
              className='link-external'
              rel='noopener noreferrer'
            >
              implicit biases
            </a>
            , while at the same time championing the underdog and having some
            fun!
          </p>{" "}
          <Link to='/medallists' className='btn btn-landing bg-gold'>
            Medallists{" "}
          </Link>{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
};

export default About;
