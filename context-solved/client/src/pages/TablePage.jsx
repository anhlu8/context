import React from "react";
import DataContextProvider from "../utils/DataContext";
import MuiDatatables from "../components/MuiDatatables";
import Dashboard from "../components/Dashboard";

const TablePage = () => {
  return (
    <DataContextProvider>
      <Dashboard mainComponent={<MuiDatatables />} />
    </DataContextProvider>
  );
};

export default TablePage;
