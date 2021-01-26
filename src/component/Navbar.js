import React from 'react'
import logo from '../images/kodehauz-logo.png'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import "./training.css"

const navbar = () => {
  return (

      <Navbar bg="light" variant="light" sticky="top" className="bg-light ">

              <Navbar.Brand href="/" >
                    <img
                      alt=""
                      src={logo}
                      // width="200"
                      height="50"
                      className="shine"
                    />
              </Navbar.Brand>
                <Nav  className="fine " >
                    <Nav.Link href="/home">Training</Nav.Link>
                    <Nav.Link href="/intership">KodeHauz Intership</Nav.Link>
                    <Nav.Link href="/hub">KodeHauz Hub</Nav.Link>
                    <Nav.Link href="/train">Train The Trainer</Nav.Link>
                    <Button variant="outline-success" href="/login">Trainee Login</Button>
                 </Nav>

          </Navbar>





    )
}
export default navbar