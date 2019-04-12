import React from "react";
import MUIDataTable from "mui-datatables";

const MuiDatatables = ({ rowData, columnName }) => {
  return (
    <MUIDataTable
      columns={columnName}
      data={rowData}
      options={{
        filterType: "checkbox"
      }}
    />
  );
};

export default MuiDatatables;
