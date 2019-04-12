import React from "react";
import FormContextProvider from "../utils/FormContext";
import Form from "../components/Form";
import Dashboard from "../components/Dashboard";

const FormPage = () => {
  return (
    <FormContextProvider>
      <Dashboard mainComponent={<Form />} />
    </FormContextProvider>
  );
};

export default FormPage;
