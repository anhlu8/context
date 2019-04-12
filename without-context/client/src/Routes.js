import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import TablePage from "./pages/TablePage";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/table" render={props => <TablePage {...props} />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
