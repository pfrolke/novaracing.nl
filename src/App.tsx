import React from "react";
import { Route, Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import Switch from "react-bootstrap/esm/Switch";
import NovaNav from "./components/NovaNav";
import NovaHero from "./components/hero/NovaHero";
import NovaAbout from "./components/about/NovaAbout";
import "./App.css";

const browserHistory = createBrowserHistory();

function App() {
  return (
    <Router history={browserHistory}>
      <NovaNav />

      <Switch>
        <Route exact path="/">
          <NovaHero />
        </Route>

        <Route exact path="/about/">
          <NovaAbout />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
