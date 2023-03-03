import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';


export default function Homepage() {
  return (
    <div>
       <Navbar bg='light' expand='lg'>
      <Navbar.Brand  className='ms-4' href='#home'>CRUD Operation</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse >
        <Nav className='ml-auto'>
          <Nav.Link href='./Form' className='ms-4'>Formpage</Nav.Link>
          <Nav.Link href='./Table' className='ms-4'>Table</Nav.Link>   
        </Nav>
        <Nav className='ml-auto'>
          <Nav.Link href='./Form' className='ms-4'>Logout</Nav.Link>
        </Nav>
        
      </Navbar.Collapse>
    </Navbar>
    </div>
  )
}
