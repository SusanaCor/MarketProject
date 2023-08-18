import React, { useState } from "react";
import { FormContext } from "./Context";
import { helados } from "../info/Info";

const FormContextProvider = ({ children }) => {
  const [usuario, setUsuario] = useState("");
  const [verdadero, setVerdadero] = useState(true);
  const lista = [];
  lista.push(helados);

  return (
    <div>
      <FormContext.Provider
        value={{ usuario, setUsuario, verdadero, setVerdadero, lista }}
      >
        {children}
      </FormContext.Provider>
    </div>
  );
};

export default FormContextProvider;
