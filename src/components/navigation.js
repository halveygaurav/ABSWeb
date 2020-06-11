import React from 'react';
import { NavLink } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
const Navigation = () => {
    console.log('navigation render')
    return (
        <Navbar bg="dark" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" />
            <Nav>
            <NavLink to="/" className="d-inline p-2 bg-dark text-white" >
                    Home</NavLink>

                    <NavLink to="/Departments" className="d-inline p-2 bg-dark text-white" >
                Departments</NavLink>

                <NavLink to="/Employees" className="d-inline p-2 bg-dark text-white" >
                Employees</NavLink>
            </Nav>
        </Navbar>

    )
}
export default React.memo(Navigation);