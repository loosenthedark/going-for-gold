import React from "react";

// Import the Route and Switch components from React Router...
import { Route, Switch } from "react-router-dom";

// Import app components/pages...
import Landing from "./pages/Landing";
import Main from "./pages/Main";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SideNav from "./components/SideNav";
import ErrorHandler from "./pages/ErrorHandler";
import BackToTopBtn from "./components/BackToTopBtn";

// Implement Switch functionality with conditional component rendering (including an error-handler) inside the app's main return statement...
function App() {
  return (
    <>
      <Route path='/:id'>
        <SideNav />
      </Route>
      <Switch>
        <Route path='/' exact>
          <Landing />
        </Route>
        <Route path='/medallists'>
          <Main />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route path='*'>
          <ErrorHandler />
        </Route>
      </Switch>
      <BackToTopBtn />
    </>
  );
}

export default App;
