import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import TablePage from "./pages/TablePage";
import FormPage from "./pages/FormPage";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route exact path="/form" component={FormPage} /> */}
        {/* passing props here so we can have access to objects: history, location, match */}
        <Route exact path="/table" render={props => <TablePage {...props} />} />
        <Route exact path="/form" render={props => <FormPage {...props} />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
