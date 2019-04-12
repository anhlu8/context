import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import TablePage from "./pages/TablePage";
import FormPage from "./pages/FormPage";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/table" component={TablePage} />
        {/* Create your "/form" here*/}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
