import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Form, FormControl, Navbar, NavDropdown } from 'react-bootstrap';

const Nav = () => {
    return (
        <Navbar bg="light" expand="lg" className='form'>
        <Navbar.Brand>Bitcoin News</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
};

export default Nav;