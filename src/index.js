import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// STEP 6 = Import the Provider Context API component...
import { AppProvider } from "./context";
// STEP 7 = Import and assign an alias to the BrowserRouter component from React Router...
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    {/* // STEP 8 = Wrap the entire app as well as the Router component inside the imported Provider component... */}
    <AppProvider>
      {/* // STEP 9 = Wrap the app inside the imported Router component... */}
      <Router>
        <App />
      </Router>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
