import React, { useContext, useState } from "react";
import "../addTask/style.css";
import { FormContext } from "../../components/context/Context";
import { useNavigate } from "react-router-dom";
import { helados } from "../../components/info/Info";
import Swal from "sweetalert2";
import Card from "react-bootstrap/Card";

const AddTasks = () => {
  const { lista } = useContext(FormContext);
  const navigate = useNavigate();
  const [producto, setproducto] = useState([]);
  const [sabor, setSabor] = useState([]);
  const [tipo, setTipo] = useState([]);
  const [precio, setPrecio] = useState([]);

  const [img, setImg] = useState([]);
  const lista2 = lista[0];

  const volver2 = () => {
    navigate("/");
  };

  const agregar = () => {
    const product = {
      producto: producto,
      sabor: sabor,
      id: helados.length,
      tipo: tipo,
      precio: precio,
      img: img,
    };

    lista2.push(product);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your product has been saved",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <>
      <div className="add1">
        <div className="add">
          {["Warning"].map((variant) => (
            <Card
              bg={variant.toLowerCase()}
              key={variant}
              text={variant.toLowerCase() === "light" ? "dark" : "white"}
              style={{ width: "18rem" }}
              className="mb-2"
            >
              <Card.Header>News Products</Card.Header>
              <Card.Body>
                <Card.Title> Add new Product </Card.Title>
                <Card.Text>
                  <div className="containerAddProducts">
                    <input
                      type="text"
                      placeholder="Name"
                      onChange={(e) => setproducto(e.target.value)}
                    />
                    <br /> <br />
                    <input
                      type="text"
                      placeholder="Price"
                      onChange={(e) => setSabor(e.target.value)}
                    />
                    <br /> <br />
                    <input
                      type="text"
                      placeholder="Flavor"
                      onChange={(e) => setTipo(e.target.value)}
                    />
                    <br /> <br />
                    <input
                      type="text"
                      placeholder="Flavor"
                      onChange={(e) => setPrecio(e.target.value)}
                    />
                    <br /> <br />
                    <input
                      type="text"
                      placeholder="Flavor"
                      onChange={(e) => setImg(e.target.value)}
                    />
                    <br /> <br />
                    <button onClick={agregar}>agregar</button>{" "}
                    <button onClick={volver2}>return</button>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default AddTasks;
