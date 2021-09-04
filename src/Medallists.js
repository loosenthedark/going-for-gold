import React from "react";
import { useGlobalContext } from "./context";

const Medallists = () => {
  // STEP 26 = Invoke custom useGlobalContext hook and access movies array as well as isLoading state value...
  const { medalCountries, isLoading } = useGlobalContext();
  console.log(medalCountries, isLoading);

  // STEP 27 = Set up multiple conditional returns:
  // Condition 1: loading condition...
  if (isLoading) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }
  // Condition 2 (default): "true return" condition...
  // STEP 28 = Iterate over the medalCountries array, returning a standalone article element for each country...
  return (
    <section>
      {medalCountries.map((country) => {
        // STEP 29 = Destructure all relevant props from country object in fn arg, allocating more appropriate/simplified aliases where necessary...
        const { alpha3Code: id, name, flag, population, totalMedals } = country;
        // STEP 30 = Link functionality here needs to be dynamic, so template literal syntax should be used...
        return (
          // <Link key={id} className='movie' to={`/movies/${id}`}>
          <article key={id}>
            <img className='flag' src={flag} alt={`${name} flag`} />
            <div>
              <h3>{name}</h3>
              <h4>Population: {population}</h4>
              <h4>Total medals: {totalMedals}</h4>
              <h4>
                Medals per million:{" "}
                {((totalMedals / population) * 1000000).toFixed(2)}
              </h4>
            </div>
          </article>
          // </Link>
        );
      })}
    </section>
  );
};

export default Medallists;
