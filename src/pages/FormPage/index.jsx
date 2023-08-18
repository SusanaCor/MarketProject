import React, { useContext, useState } from "react";
import "../FormPage/style.css";
import { FormContext } from "../../components/context/Context";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import NavBar from "../../components/NavBar";
const FormPage = () => {
  const { setUsuario, setVerdadero } = useContext(FormContext);
  const navigate = useNavigate();

  const volver = () => {
    navigate("/");
    setVerdadero(false);
  };

  const volver2 = () => {
    navigate("/");
  };

  return (
    <div>
      <NavBar />
      <center>
        <Card border="warning" style={{ width: "18rem" }}>
          <Card.Header>Add New Product</Card.Header>
          <Card.Body>
            <div className="containerFormPage">
              <h1>Log in</h1>
              <div className="containerInputs">
                <input
                  type="text"
                  placeholder="name..."
                  onChange={(e) => setUsuario(e.target.value)}
                />
                <br />
                <br />
                <input type="text" placeholder="email..." />
                <br /> 
                <br />
                <input type="text" placeholder="password" />
                <br /> 
              </div>
              <br />
              <button onClick={volver}>Log in</button>{" "}
              <button onClick={volver2}>return</button>
            </div>
          </Card.Body>
        </Card>
      </center>
    </div>
  );
};

export default FormPage;
