import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import React from "react";
import Form from "react-bootstrap/Form";
// import { Link } from "react-router-dom";
export default function NavigationBar(props) {
  return (
    <div>
      <Navbar
        data-bs-theme="dark"
        bg={props.mode === "light" ? "dark" : "warning"}
      >
        <Container className={props.mode}>
          {/* <Navbar.Brand ><Link to="/"  style={{textDecoration: 'none', color:'white'}}>{props.title}</Link></Navbar.Brand> */}
          <Navbar.Brand href="#" >{props.title}</Navbar.Brand>
          <Nav className={`me-auto ${props.mode}`}>
            {/* <Nav.Link><Link to="/about" style={{textDecoration: 'none', color:'white'}}>{props.about}</Link></Nav.Link> */}
            <Nav.Link href="#">{props.about}</Nav.Link>
          </Nav> 
          <Form.Check
            type="switch"
            id="custom-switch"
            label={`Change to ${
              props.mode === "rainbow" ? "light" : "rainbow"
            } mode`}
            style={{ color: "white" }}
            onChange={props.toggleMode}
          />
        </Container>
      </Navbar>
    </div>
  );
}
