import React from "react";

// STEP 10 = Import the Route and Switch components from React Router...
import { Route, Switch } from "react-router-dom";

// STEP 11 = Import app component(s)...
import Landing from "./Landing";
import ErrorHandler from "./ErrorHandler";

// STEP 12 = Implement Switch functionality with conditional component rendering (including an error-handler) inside the app's main return statement...
function App() {
  return (
    <>
      <Switch>
        <Route path='/' exact>
          <Landing />
        </Route>{" "}
        <Route path='*'>
          <ErrorHandler />
        </Route>{" "}
      </Switch>{" "}
    </>
  );
}

export default App;
