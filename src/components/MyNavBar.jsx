import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import dragon from "../images/dragon.png"




function MyNavBar({searchValue, setSearchValue}) {

  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container >
        <Navbar.Brand as={Link} to={"/"}>
        <img className="logo" src={dragon} alt={"logo"} />
        </Navbar.Brand>

        <Form className="navbar-form">
          <InputGroup onChange={(event) => setSearchValue(event.target.value)}>
          <Nav.Link as={Link} to="/books/results">
            <Button type="submit">🔍</Button>
          </Nav.Link>
           
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
                <Nav.Link as={Link} to="/books"> All books 📖</Nav.Link>
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