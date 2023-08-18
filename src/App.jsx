import React from "react";
import "./App.css";
import { AppRouter } from "./AppRoutes/AppRoutes";
import FormContextProvider from "./components/context/ContextProvider";

const App = () => {
  return (
    <FormContextProvider>
      <AppRouter />
    </FormContextProvider>
  );
};

export default App;
