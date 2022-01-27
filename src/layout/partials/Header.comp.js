import React from "react";
import { Navbar, Nav, NavbarBrand } from "react-bootstrap";
import { LinkContainer } from "react-bootstrap";
import logo from "../../assets/img/logo.png";


export const Header = () => {
  return (
    <Navbar  collapseOnSelect bg="info" variant="dark" expand="md">
      <Navbar.Brand>
        <img src={logo} alt="logo" width="50px"/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/dashboard">Dashboard</Nav.Link>
          <Nav.Link href="/Jobs">Jobs</Nav.Link>
          <Nav.Link href="/Layout">Layout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      
    </Navbar>
  );
};