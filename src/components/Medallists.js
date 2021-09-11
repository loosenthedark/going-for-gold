import React, { useEffect } from "react";
import { FaAward } from "react-icons/fa";
import { ImWarning } from "react-icons/im";
import { useGlobalContext } from "../context";
import flagROC from "../static/images/logos/flag-roc.png";
import Loading from "./Loading";
import Toggle from "./ToggleSwitch";
import Search from "./SearchInput";
import NavToggler from "./NavToggler";

const Medallists = () => {
  // Invoke custom useGlobalContext hook and access movies array as well as isLoading state value...
  const { medalCountries, isLoading, toggledIcon, searchQuery, setError } =
    useGlobalContext();

  // useEffect hook can check search input to ensure it is at least three characters in length and toggle error state value accordingly to relay feedback to user...
  useEffect(() => {
    searchQuery.length > 0 && searchQuery.length < 3
      ? setError(true)
      : setError(false);
  }, [searchQuery]);

  const filteredMedalCountries = medalCountries.filter((country) => {
    return searchQuery === "" || searchQuery.length < 3
      ? country
      : country.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  // Utility function obtained from this Stack Overflow thread: https://stackoverflow.com/questions/487073/how-to-check-if-element-is-visible-after-scrolling/22480938#22480938
  const isScrolledIntoView = (el) => {
    const rect = el.getBoundingClientRect();
    const elemTop = rect.top;
    const elemBottom = rect.bottom;

    // Only completely visible elements return true:
    // const isVisible = elemTop >= 0 && elemBottom <= window.innerHeight;
    // Partially visible elements return true:
    const isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    return isVisible;
  };

  window.onload = function () {
    setTimeout(() => {
      document.addEventListener("scroll", function (e) {
        const articleArray = [...document.querySelectorAll(".wrapper-flag")];
        articleArray.forEach((article, index) => {
          isScrolledIntoView(article) && article.classList.add("flag-spin");
        });
      });
    }, 3000);
  };

  // Set up multiple conditional returns:
  // Condition 1: loading condition...
  if (isLoading) {
    return <Loading />;
  }
  // Condition 1: No medallists found based on user search criteria...
  // Condition 3 (default): "true return" condition...
  // Iterate over the medalCountries array, returning a standalone article element for each country...
  return (
    <>
      <Toggle />
      <Search />
      <NavToggler />{" "}
      {document.readyState === "complete" &&
        filteredMedalCountries.length === 0 && (
          <section>
            <article className='flex-centre-j article-error'>
              <div
                className={`container-flag container-flag-Americas container-flag-error flex-centre`}
              >
                <div className='wrapper-flag'> </div>{" "}
              </div>{" "}
              <div>
                <h3> No medallists found! </h3>{" "}
                <div>
                  <h5> Please try another search... </h5>{" "}
                  <ul>
                    <li>
                      <div className='wrapper-rank'>
                        <ImWarning className='icon-warning' />
                      </div>{" "}
                    </li>{" "}
                  </ul>{" "}
                </div>{" "}
              </div>{" "}
            </article>{" "}
          </section>
        )}{" "}
      <section>
        {" "}
        {filteredMedalCountries.map((country, index) => {
          // Destructure all relevant props from country object in fn arg, allocating more appropriate/simplified aliases where necessary...
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

          // Link functionality here needs to be dynamic, so template literal syntax should be used...
          return (
            // <Link key={country.id} className='' to={`/country/${id}`}>
            <article
              className={`flex-centre-j ${index % 2 !== 0 && "even"}`}
              key={id}
            >
              <div
                className={`container-flag container-flag-${region} flex-centre ${
                  index % 2 !== 0 && "even"
                }`}
              >
                <div className='wrapper-flag'>
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
                        : name === "Macedonia (the former Yugoslav Republic of)"
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
                    className={!toggledIcon ? "underline underline-gold" : null}
                  >
                    Gold medals: <span> {goldMedals} </span>{" "}
                  </li>{" "}
                  <li
                    className={toggledIcon ? "underline underline-gold" : null}
                  >
                    Total medals: <span> {totalMedals} </span>{" "}
                  </li>{" "}
                  <li
                    className={!toggledIcon ? "underline underline-gold" : null}
                  >
                    Golds per million: <span> {goldsPerMillion} </span>{" "}
                  </li>{" "}
                  <li
                    className={toggledIcon ? "underline underline-gold" : null}
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
