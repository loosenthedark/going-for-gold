import React, { useState, useContext } from "react";
import useRequests from "./useRequests";

// STEP 1 = Set up the app's global context via the React Context API...
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [activeBtn, setActiveBtn] = useState("golds");
  const {
    isLoading,
    error,
    info: medalCountries,
    toggle,
    setToggle,
  } = useRequests("all");

  // STEP 25 = Pass all necessary state values through the Provider component's value prop to be accessed from elsewhere within the app...
  return (
    <AppContext.Provider
      value={{
        activeBtn,
        setActiveBtn,
        isLoading,
        error,
        medalCountries,
        toggle,
        setToggle,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// STEP 2 = Create a custom hook to handle and export context for ease of reuse throughout the app...
export const useGlobalContext = () => {
  return useContext(AppContext);
};

// STEP 3 = Export the Provider component so that consuming components throughout the app can subscribe to context changes...
export { AppProvider };
