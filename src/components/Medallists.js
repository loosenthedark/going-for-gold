import React from "react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { FaAward } from "react-icons/fa";
import { useGlobalContext } from "../context";
import flagROC from "../static/images/logos/flag-roc.png";
import Loading from "./Loading";
import Toggle from "./ToggleSwitch";
import Search from "./SearchInput";
import NavToggler from "./NavToggler";

const Medallists = () => {
  // STEP 26 = Invoke custom useGlobalContext hook and access movies array as well as isLoading state value...
  const { medalCountries, isLoading, toggledIcon, searchQuery } =
    useGlobalContext();

  // const isScrolledIntoView = (el) => {
  //   const rect = el.getBoundingClientRect();
  //   const elemTop = rect.top;
  //   const elemBottom = rect.bottom;

  //   // Only completely visible elements return true:
  //   const isVisible = elemTop >= 0 && elemBottom <= window.innerHeight;
  //   // Partially visible elements return true:
  //   //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
  //   console.log(isVisible);
  //   return isVisible;
  // };

  useScrollPosition(({ prevPos, currPos }) => {
    console.log(currPos.x);
    console.log(currPos.y);
  });

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
      <NavToggler />
      <section>
        {" "}
        {medalCountries
          .filter((country) => {
            return searchQuery === "" || searchQuery.length < 3
              ? country
              : country.name.toLowerCase().includes(searchQuery.toLowerCase());
          })
          .map((country, index) => {
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
                    <img
                      className='flag'
                      src={name === "Russian Federation" ? { flagROC } : flag}
                      alt={`${
                        name === "Russian Federation"
                          ? "ROC"
                          : name === "United States of America"
                          ? "USA"
                          : name === "Syrian Arab Republic"
                          ? "Syria"
                          : name === "Moldova (Republic of)"
                          ? "Moldova"
                          : name === "Iran (Islamic Republic of)"
                          ? "Iran"
                          : name ===
                            "Macedonia (the former Yugoslav Republic of)"
                          ? "North Macedonia"
                          : name === "Venezuela (Bolivarian Republic of)"
                          ? "Venezuela"
                          : name === "Republic of Kosovo"
                          ? "Kosovo"
                          : name ===
                            "United Kingdom of Great Britain and Northern Ireland"
                          ? "Great Britain"
                          : name
                      } flag`}
                    />{" "}
                    <div className='flag-olympic trbl-0'> </div>{" "}
                  </div>{" "}
                </div>{" "}
                <div>
                  <h2>
                    {" "}
                    {name === "Russian Federation"
                      ? "ROC"
                      : name === "United States of America"
                      ? "USA"
                      : name === "Syrian Arab Republic"
                      ? "Syria"
                      : name === "Moldova (Republic of)"
                      ? "Moldova"
                      : name === "Iran (Islamic Republic of)"
                      ? "Iran"
                      : name === "Macedonia (the former Yugoslav Republic of)"
                      ? "North Macedonia"
                      : name === "Venezuela (Bolivarian Republic of)"
                      ? "Venezuela"
                      : name === "Republic of Kosovo"
                      ? "Kosovo"
                      : name ===
                        "United Kingdom of Great Britain and Northern Ireland"
                      ? "Great Britain"
                      : name}{" "}
                  </h2>{" "}
                  <ul>
                    <li>
                      Population:{" "}
                      <span>
                        {" "}
                        {population
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                      </span>{" "}
                    </li>{" "}
                    <li
                      className={
                        !toggledIcon ? "underline underline-gold" : null
                      }
                    >
                      Gold medals: <span> {goldMedals} </span>{" "}
                    </li>{" "}
                    <li
                      className={
                        toggledIcon ? "underline underline-gold" : null
                      }
                    >
                      Total medals: <span> {totalMedals} </span>{" "}
                    </li>{" "}
                    <li
                      className={
                        !toggledIcon ? "underline underline-gold" : null
                      }
                    >
                      Golds per million: <span> {goldsPerMillion} </span>{" "}
                    </li>{" "}
                    <li
                      className={
                        toggledIcon ? "underline underline-gold" : null
                      }
                    >
                      Total per million: <span> {medalsPerMillion} </span>{" "}
                    </li>{" "}
                    <li>
                      <div className='wrapper-rank'>
                        <FaAward className='icon-award-golds' />{" "}
                        <span> {index + 1} </span>{" "}
                      </div>{" "}
                    </li>{" "}
                  </ul>{" "}
                </div>{" "}
              </article>
              // </Link>
            );
          })}{" "}
      </section>{" "}
    </>
  );
};

export default Medallists;
