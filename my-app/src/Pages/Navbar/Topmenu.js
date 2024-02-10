import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    Box
  } from "@mui/material";
  import "../../assets/css/CommonStyle.css";


const settings = ["Profile", "Logout"];

function Topmenu(props) {

  return (
    <Navbar expand="lg" >
      <Container fluid>
        <Box className="wel-sty">
        <h1>Welcome Admin..</h1>
        </Box>
      </Container>
    </Navbar>
  );
}

export default Topmenu;
