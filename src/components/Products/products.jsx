import "./Products.css";
import { React, useContext, useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../pagination";
import { FormContext } from "../context/Context";


export const Products = () => {
  const pageZise = 9;
  const [page, setPage] = useState(0);
  const { lista } = useContext(FormContext);

  return (
    <>

      <section className="SectionProducts">
        <div className="containerProducts">
          {lista[0]
            .slice(page * pageZise, page * pageZise + pageZise)
            .map((producto) => {
              return (
                <>
                  <div className="card2">
                    <div className="prueba">
                    <Link to={`/DetailsPage/${producto.id}`}>
                      <img
                        className="imgs"
                        src={producto.img}
                        alt=""
                        srcset=""
                      
                      />
  </Link>
                     
                      <p>{producto.producto}</p>
                      <h4>Flavor</h4>
                      <p>{producto.sabor}</p>

                      <h4>Price</h4>
                      <p>{producto.precio}</p>
                      
                       
                        
                     
                    </div>
                  </div>
                </>
              );
            })}
        </div>

        <Pagination page={page} setPage={setPage} />
        <div className="ListProducts"></div>
      </section>
    </>
  );
};
