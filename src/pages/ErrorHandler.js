import React from "react";
import { Link } from "react-router-dom";

const ErrorHandler = () => {
  return (
    <section>
      <div>
        <h2>Oops! You seem to have lost your way...</h2>
        <Link to='/'>Return Home</Link>
      </div>
    </section>
  );
};

export default ErrorHandler;
