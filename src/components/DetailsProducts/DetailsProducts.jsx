import React from "react";
import "./DetailsProducts.css";
import { useParams } from "react-router-dom";
import { helados } from "../info/Info.js";
import Card from "react-bootstrap/Card";
import "./DetailsProducts.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../../components/NavBar";
import { useNavigate } from "react-router-dom";

function DetailsProducts() {
  const navigate = useNavigate();
  const params = useParams();
  const volver2 = () => {
    navigate("/");
  };

  const id = Number(params.id);

  console.log(helados[id].producto);

  return (
    <div className="container-info">
      <Card>
        <Card.Body bg="warning">
          <center>
            <h1 className="title">The best ice creams</h1>
            <div className="productos">
              <div className="producto">
                <a href="#">
                  <div id="producto_img">
                    <img
                      className="IMG"
                      src={helados[id].img}
                      alt={helados[id].producto}
                    />
                  </div>
                </a>
                <div className="productos-footer">
                  <h1> {helados[id].producto}</h1>
                  <p className="price">Type <br /> {helados[id].tipo}</p>
                  <p className="price">Flavor <br /> {helados[id].sabor}</p>
                  <p className="price">Price <br /> {helados[id].precio}</p>
                
                 
                 
                </div>
                <div className="buttom">
                  <button onClick={volver2}>return</button>
                  <div>
                    <a href="" className="  ">
                      {" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </center>
        </Card.Body>
      </Card>
    </div>
  );
}

export default DetailsProducts;
