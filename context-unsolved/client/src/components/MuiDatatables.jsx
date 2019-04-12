import React from "react";
import MUIDataTable from "mui-datatables";
import { DataContextConsumer } from "../utils/DataContext";

const MuiDatatables = () => {
  return (
    <DataContextConsumer>
      {value => (
        <MUIDataTable
          columns={value.state.columnName}
          data={value.state.rowData}
          options={{
            filterType: "checkbox"
          }}
        />
      )}
    </DataContextConsumer>
  );
};

export default MuiDatatables;
