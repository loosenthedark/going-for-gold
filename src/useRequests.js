// Create a dynamic and reusable breakout custom hook to handle the majority of fetch functionality and make codebase more DRY-compliant...
import { useState, useEffect } from "react";
import medalsData from "./data/medalsData";
import kosovoData from "./data/kosovoData";

// Store root API request URL in a variable...
const API_ENDPOINT = "https://restcountries.com/v2/";

const useRequests = (urlParams) => {
  // Set up primary state values...
  const [isLoading, setIsLoading] = useState(true);
  const [info, setInfo] = useState([]);
  const [toggledIcon, setToggledIcon] = useState(false);
  const [toggle, setToggle] = useState("golds");

  // Set up async fetchMedallists fn with try/catch logic and error handling...
  const fetchMedallists = async (url) => {
    // Ensure isLoading is set to true every time fetch fn is invoked to tell the user that medallist(s) are being fetched...
    setIsLoading(true);
    try {
      const responseFromAPI = await fetch(url);
      const data = await responseFromAPI.json();
      let filteredArray = [];
      data.filter((item) => {
        return medalsData.forEach((medallist) => {
          if (item.cioc === medallist.country_alpha3) {
            filteredArray.push({
              ...item,
              goldMedals: medallist.medals.gold,
              totalMedals: medallist.medals.total,
              goldsPerMillion: (
                (medallist.medals.gold / item.population) *
                1000000
              ).toFixed(2),
              medalsPerMillion: (
                (medallist.medals.total / item.population) *
                1000000
              ).toFixed(2),
            });
          }
        });
      });
      filteredArray.splice(48, 0, kosovoData);
      // Check whether data returned from API is valid and usable, i.e. that there is a filtered array of countries...
      if (filteredArray.length > 0) {
        // If an array has been returned, update the info state value accordingly and (re)set the error state value...
        if (toggle === "golds") {
          filteredArray.sort((a, b) => {
            return b.goldsPerMillion === a.goldsPerMillion
              ? b.medalsPerMillion - a.medalsPerMillion
              : b.goldsPerMillion - a.goldsPerMillion;
          });
        } else if (toggle === "total") {
          filteredArray.sort((a, b) => {
            return b.medalsPerMillion === a.medalsPerMillion
              ? b.goldsPerMillion - a.goldsPerMillion
              : b.medalsPerMillion - a.medalsPerMillion;
          });
        }
        setInfo(filteredArray);
      }
      // Toggle isLoading to false once API request has been completed...
      setIsLoading(false);
    } catch (error) {
      // Handle misfiring attempt(s) at making an API request, as well as disabling loading in the state value...
      console.log(error);
      setIsLoading(false);
    }
  };

  // With the useEffect hook, invoke the fetch fn to request data from a compound endpoint (root endpoint + searchQuery)...
  useEffect(() => {
    fetchMedallists(`${API_ENDPOINT}${urlParams}`);
    //   {
    /* Add urlParams to the hook's dependency array to trigger the fetch fn every time the user enters new search input... */
    //   }
  }, [urlParams, toggle]);

  return {
    isLoading,
    info,
    setInfo,
    toggle,
    setToggle,
    toggledIcon,
    setToggledIcon,
  };
};

export default useRequests;
