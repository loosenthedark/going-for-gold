import React, { useState, useContext } from "react";
import useRequests from "./useRequests";

// STEP 1 = Set up the app's global context via the React Context API...
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const { isLoading, error, info } = useRequests("all");

  // STEP 24 = Pass all necessary state values through the Provider component's value prop to be accessed from elsewhere within the app...
  return (
    <AppContext.Provider value={{ isLoading, error, info }}>
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
