import React, { useContext, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FormContext } from "../context/Context";

function NavBar() {
  const { verdadero } = useContext(FormContext);
  const navigate = useNavigate();

  const prueba = () => {
    navigate("/FormPage");
    if (verdadero === false) {
      window.location.reload(true);
    }
  };
  return (
    <div>
                      <p>   Contact 📲 70396750                   Location 🏚 Puntarenas, Costa Rica     </p>  


      <>
        {["xxl"].map((expand) => (
          <Navbar
            key={expand}
            expand={expand}
            className="bg-body-tertiary mb-3"
          >
            <Container fluid>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    <img src="/img/logo.png" alt="" width="150 px" />
                    <br />
                    Welcome to Anaís IceCream 🍧!
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="/">Home</Nav.Link>


                    
                    <Nav.Link href="#action2">
                      <Link to={"FormPage"}>
                        <a
                          class="nav-link active"
                          aria-current="page"
                          href="#"
                          onClick={prueba}
                        >
                          {verdadero ? "log in" : "log out"}
                        </a>
                      </Link>
                    </Nav.Link>

                    <NavDropdown
                      title="New Produts"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                      <NavDropdown.Item href="#action3">
            
                        <Link to={"/AddTasks"}>
                          <a class="nav-link" href="#">
                            Add new products
                          </a>
                        </Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/">
                       View all Products
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action5">
                        Support Contact
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </>

      <Outlet />
    </div>
  );
}

export default NavBar;
