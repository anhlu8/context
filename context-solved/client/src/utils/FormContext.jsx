import React, { Component, createContext, Fragment } from "react";
import API from "./API";

//Instantiate Context
const FormContext = createContext();

class FormContextProvider extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    this.loadData();
  }

  loadData = () => {
    API.getFormData().then(res => {
      this.setState({ data: res.data });
    });
  };

  render() {
    return (
      <Fragment>
        <FormContext.Provider
          value={{
            state: this.state
          }}
        >
          {this.props.children}
        </FormContext.Provider>
      </Fragment>
    );
  }
}

export default FormContextProvider;
export const FormContextConsumer = FormContext.Consumer;
