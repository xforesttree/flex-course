import React from "react";
import { Route, Switch, Router } from "react-router";
import Site from "./Site";
import { default as SiteGoal } from "./solution/Site";
import { createBrowserHistory } from "history";

function App() {
  const history = createBrowserHistory();

  return (
    <Router history={history}>
      <Switch>
        <Route exact={true} path="/goal" component={SiteGoal} />
        <Route exact={true} path="/" component={Site} />
      </Switch>
    </Router>
  );
}

export default App;
