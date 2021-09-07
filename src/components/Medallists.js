import React from "react";
import { useGlobalContext } from "../context";
import Loading from "./Loading";
import Toggle from "./ToggleSwitch";
import Search from "./SearchInput";
import Nav from "./NavMenu";

const Medallists = () => {
  // STEP 26 = Invoke custom useGlobalContext hook and access movies array as well as isLoading state value...
  const { medalCountries, isLoading, activeBtn } = useGlobalContext();

  // STEP 27 = Set up multiple conditional returns:
  // Condition 1: loading condition...
  if (isLoading) {
    return <Loading />;
  }
  // Condition 2 (default): "true return" condition...
  // STEP 28 = Iterate over the medalCountries array, returning a standalone article element for each country...
  return (
    <>
      <Toggle />
      <Search />
      <Nav />
      <section>
        {medalCountries.map((country) => {
          // STEP 29 = Destructure all relevant props from country object in fn arg, allocating more appropriate/simplified aliases where necessary...
          const {
            alpha3Code: id,
            name,
            flag,
            population,
            region,
            totalMedals,
            goldMedals,
            goldsPerMillion,
            medalsPerMillion,
          } = country;

          // STEP 30 = Link functionality here needs to be dynamic, so template literal syntax should be used...
          return (
            // <Link key={country.id} className='' to={`/country/${id}`}>
            <article className='flex-centre-j' key={id}>
              <div
                className={`container-flag container-flag-${region} flex-centre`}
              >
                <div className='wrapper-flag flag-spin'>
                  <img className='flag' src={flag} alt={`${name} flag`} />
                  <div className='flag-olympic trbl-0'> </div>
                </div>
              </div>
              <div>
                <h2> {name} </h2>
                <ul>
                  <li>
                    Population:{" "}
                    <span>
                      {population
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </span>
                  </li>
                  <li
                    className={
                      activeBtn === "golds" ? "underline underline-gold" : null
                    }
                  >
                    Gold medals: <span> {goldMedals} </span>
                  </li>
                  <li
                    className={
                      activeBtn === "total" ? "underline underline-total" : null
                    }
                  >
                    Total medals: <span> {totalMedals} </span>
                  </li>
                  <li
                    className={
                      activeBtn === "golds" ? "underline underline-gold" : null
                    }
                  >
                    Golds per million: <span> {goldsPerMillion} </span>
                  </li>
                  <li
                    className={
                      activeBtn === "total" ? "underline underline-total" : null
                    }
                  >
                    Total per million: <span> {medalsPerMillion} </span>
                  </li>
                </ul>
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
