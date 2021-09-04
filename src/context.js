import React, { useState, useContext } from "react";

// STEP 1 = Set up the app's global context via the React Context API...
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value={"Hello from context.js!"}>
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
