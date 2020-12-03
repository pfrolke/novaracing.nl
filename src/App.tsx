import React from "react";
import "./App.css";
import { Route, Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import Switch from "react-bootstrap/esm/Switch";
import NovaNav from "./components/NovaNav";
import NovaHero from "./components/NovaHero";
import { Col, Container, Row } from "react-bootstrap";

const browserHistory = createBrowserHistory();

function App() {
  return (
    <Router history={browserHistory}>
      <NovaNav />

      <Switch>
        <Route exact path="/">
          <NovaHero />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
