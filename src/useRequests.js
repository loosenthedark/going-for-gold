// STEP 45 = Create a dynamic and reusable breakout custom hook to handle the majority of fetch functionality and make codebase more DRY-compliant...
import { useState, useEffect } from "react";
import medalsData from "./medalsData";

// STEP 14 = Store root API request URL in a variable...
const API_ENDPOINT = "https://restcountries.eu/rest/v2/";

const useRequests = (urlParams) => {
  // STEP 15 = Set up primary state values...
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [info, setInfo] = useState([]);
  const [medallists, setMedallists] = useState(medalsData);

  // STEP 16 = Set up async fetchMedallists fn with try/catch logic and error handling...
  const fetchMedallists = async (url) => {
    // STEP 17 = Ensure isLoading is set to true every time fetch fn is invoked to tell the user that medallist(s) are being fetched...
    setIsLoading(true);
    try {
      const responseFromAPI = await fetch(url);
      const data = await responseFromAPI.json();
      console.log(data);
      // if (data.Response === "True") {
      //   setInfo(data.Search || data);
      //   setError({ show: false, msg: "" });
      // } else if (data.Response === "False") {
      //   setError({ show: true, msg: data.Error });
      // }
      setIsLoading(false);
    } catch (error) {
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

  return { isLoading, error, info, medallists };
};

export default useRequests;
