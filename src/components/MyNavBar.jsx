import React from 'react'
import imgLogo from "../images/logo.png"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';



function MyNavBar() {

  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand as={Link} to={"/"}>
        <img className="logo" src={imgLogo} alt={"logo"} />
        </Navbar.Brand>

        
        <Form>
            <InputGroup>
            <Button type="submit">🔍</Button>
            <Form.Control
              placeholder="Book title, author, genre..."
              aria-label="searc"
              aria-describedby="basic-addon1"
          />

            </InputGroup>
            </Form>

        

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
                <Nav.Link as={Link} to="/booksList"> All books 📖</Nav.Link>
                <Nav.Link as={Link} to="/authors"> Authors ✍️</Nav.Link>
                <Nav.Link as={Link} to="/fiveStars"> Five Stars ⭐</Nav.Link>
                <Nav.Link as={Link} to="/aboutUs"> About us 🐲</Nav.Link>
            </Nav>    
        </Navbar.Collapse>  
      </Container>
    </Navbar>
  )
}

export default MyNavBar