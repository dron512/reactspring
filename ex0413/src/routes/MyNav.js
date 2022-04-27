import React from "react";
import {
  Nav,
  NavDropdown,
  Navbar,
  Container,
  Offcanvas,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const MyNav = () => {
  const mystyle = {
    width: "25%",
  };
  return (
    <div>
      <Navbar fixed="bottom" bg="light" variant="light">
        <Container>
          <Nav className="me-auto w-100">
            <Nav.Link as={Link} to="/" style={mystyle}>
              홈
            </Nav.Link>
            <Nav.Link as={Link} to="/Reservation" style={mystyle}>
              실시간예약
            </Nav.Link>
            <Nav.Link as={Link} to="/Community" style={mystyle}>
              커뮤니티
            </Nav.Link>
            <Nav.Link as={Link} to="/MyPage" style={mystyle}>
              마이페이지
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default MyNav;
