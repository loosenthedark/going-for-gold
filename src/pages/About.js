import React from "react";
import Nav from "../components/NavMenu";

const About = () => {
  return (
    <>
      <div className='container-about'>
        <Nav />
        <div className='overlay-about flex-centre trbl-0'></div>
        <div className='overlay-about-text flex-centre trbl-0'>
          <h1>Going for Gold!</h1>
          <p>
            Unfolding in the wake of a global pandemic, the Tokyo 2020 Olympics
            were a Games like no other.
          </p>
          <p>
            Now <span>Going for Gold</span> has compiled an Olympic medal count
            like no other, bringing users a uniquely fair and balanced
            statistical perspective.
          </p>
          <p>
            By offering an alternative medals breakdown - ranking countries in
            relative (per capita) rather than absolute terms - we hope to
            challenge people's attitudes and implicit biases, while at the same
            time championing the underdog and having some fun!
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
