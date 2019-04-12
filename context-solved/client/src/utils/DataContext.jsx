import React, { Component, createContext, Fragment } from "react";
import API from "./API";

//Instantiate Context
const DataContext = createContext();

class DataContextProvider extends Component {
  state = {
    columnName: [],
    rowData: []
  };

  componentDidMount() {
    this.loadData();
  }

  loadData = () => {
    API.getData().then(res => {
      this.setState({ columnName: res.data.columns, rowData: res.data.rows });
    });
  };

  render() {
    return (
      <Fragment>
        <DataContext.Provider
          value={{
            state: this.state
          }}
        >
          {this.props.children}
        </DataContext.Provider>
      </Fragment>
    );
  }
}

export default DataContextProvider;
export const DataContextConsumer = DataContext.Consumer;
