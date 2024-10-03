import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import dragon from "../images/dragon.png"




function MyNavBar({searchValue, setSearchValue}) {

    const [expanded, setExpanded] =useState(false)

    const handleToggle = () => setExpanded(!expanded) //alternar el estado del menu
    const handleLinkClick =() => setExpanded (false) //cerrar el menú cunado se hace click


  return (
    <Navbar expand="lg" className="custom-navbar" expanded={expanded}>
      <Container >
        
        <Navbar.Brand as={Link} to={"/"}>
        <img className="logo" src={dragon} alt={"logo"} />
        </Navbar.Brand>
      

    
        <Form className="navbar-form">
          <InputGroup onChange={(event) => setSearchValue(event.target.value)}>
          <Nav.Link as={Link} to="/books/results">
            <Button variant="outline-secondary" type="submit">🔍</Button>
          </Nav.Link>
           
            <Form.Control
              placeholder="Book title, author, genre..."
              aria-label="searc"
              aria-describedby="basic-addon1"
              />
         </InputGroup>
        </Form>     

        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle}/>
       
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
                <Nav.Link  id="enlacesNav" as={Link} to="/books" onClick={handleLinkClick}> All books 📖</Nav.Link>
                <Nav.Link id="enlacesNav" as={Link} to="/authors" onClick={handleLinkClick}> Authors ✍️</Nav.Link>
                <Nav.Link id="enlacesNav" as={Link} to="/fiveStars" onClick={handleLinkClick}> Five Stars ⭐</Nav.Link>
                <Nav.Link id="enlacesNav" as={Link} to="/aboutUs" onClick={handleLinkClick}> About us 🐲</Nav.Link>
            </Nav>    
        </Navbar.Collapse>  
       
      </Container>
    </Navbar>
  )
}

export default MyNavBar