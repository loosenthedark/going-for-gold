// STEP 45 = Create a dynamic and reusable breakout custom hook to handle the majority of fetch functionality and make codebase more DRY-compliant...
import { useState, useEffect } from "react";
import medalsData from "./medalsData";
import kosovoData from "./kosovoData";

// STEP 14 = Store root API request URL in a variable...
const API_ENDPOINT = "https://restcountries.eu/rest/v2/";

const useRequests = (urlParams) => {
  // STEP 15 = Set up primary state values...
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [info, setInfo] = useState([]);

  // STEP 16 = Set up async fetchMedallists fn with try/catch logic and error handling...
  const fetchMedallists = async (url) => {
    // STEP 17 = Ensure isLoading is set to true every time fetch fn is invoked to tell the user that medallist(s) are being fetched...
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
              totalMedals: medallist.medals.total,
            });
          }
        });
      });
      filteredArray.splice(48, 0, kosovoData);
      // STEP 20 = Check whether data returned from API is valid and usable, i.e. that there is a filtered array of countries...
      if (filteredArray.length > 0) {
        // STEP 21 = If an array has been returned, update the info state value accordingly and (re)set the error state value...
        setInfo(filteredArray);
        setError(false);
      } else if (filteredArray.length < 1 || !filteredArray) {
        // STEP 22 = But, if no array has been returned, update the error state value to reflect this...
        setError(true);
      }
      // STEP 23 = Either way, toggle isLoading to false once API request has been completed...
      setIsLoading(false);
    } catch (error) {
      // STEP 24 = Handle misfiring attempt(s) at making an API request, as well as disabling loading in the state value...
      console.log(error);
      setIsLoading(false);
    }
  };

  // STEP 18 = With the useEffect hook, invoke the fetch fn to request data from a compound endpoint (root endpoint + searchQuery)...
  useEffect(() => {
    fetchMedallists(`${API_ENDPOINT}${urlParams}`);
    //   {
    /* STEP 19 = Add urlParams to the hook's dependency array to trigger the fetch fn every time the user enters new search input... */
    //   }
  }, [urlParams]);

  return { isLoading, error, info };
};

export default useRequests;
