import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import User from "./components/users/User";
import GithubState from "./context/github/GithubState";
import "bootstrap";
import "./App.css";
import AlertState from "./context/alert/AlertState";

function App() {
  const title = "findOnGitHub";

  return (
    <GithubState>
      <AlertState>
        <Router>
          <Navbar title={title} />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path={`/users/:login`} component={User} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </AlertState>
    </GithubState>
  );
}

export default App;
