import React, { Component } from "react";
import Dashboard from "../components/Dashboard";
import API from "../utils/API";

class DataTablePage extends Component {
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
    const { columnName, rowData } = this.state;
    return <Dashboard columnName={columnName} rowData={rowData} />;
  }
}

export default DataTablePage;
