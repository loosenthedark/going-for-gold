import React from "react";
import { useGlobalContext } from "./context";
import Loading from "./Loading";
import Search from "./SearchInput";

const Medallists = () => {
  // STEP 26 = Invoke custom useGlobalContext hook and access movies array as well as isLoading state value...
  const { medalCountries, isLoading } = useGlobalContext();
  console.log(medalCountries, isLoading);

  // STEP 27 = Set up multiple conditional returns:
  // Condition 1: loading condition...
  if (isLoading) {
    return <Loading />;
  }
  // Condition 2 (default): "true return" condition...
  // STEP 28 = Iterate over the medalCountries array, returning a standalone article element for each country...
  return (
    <>
      <h1>Going for Gold!</h1>
      <Search />
      <section>
        {medalCountries.map((country) => {
          // STEP 29 = Destructure all relevant props from country object in fn arg, allocating more appropriate/simplified aliases where necessary...
          const {
            alpha3Code: id,
            name,
            flag,
            population,
            totalMedals,
            goldMedals,
            goldsPerMillion,
            medalsPerMillion,
          } = country;

          // STEP 30 = Link functionality here needs to be dynamic, so template literal syntax should be used...
          return (
            // <Link key={id} className='movie' to={`/movies/${id}`}>
            <article key={id}>
              <div className='flag-container'>
                <div className='flag-wrapper flag-spin'>
                  <img className='flag' src={flag} alt={`${name} flag`} />
                  <div className='flag-olympic'></div>
                </div>
              </div>
              <div>
                <h2>{name}</h2>
                <p>Population: {population}</p>
                <p>Gold medals: {goldMedals}</p>
                <p>Total medals: {totalMedals}</p>
                <p>Gold medals per million: {goldsPerMillion}</p>
                <p>Total medals per million: {medalsPerMillion}</p>
              </div>
            </article>
            // </Link>
          );
        })}
      </section>
    </>
  );
};

export default Medallists;
