import React from 'react'
import {
    Navbar,
    Nav
} from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function NavigationBar() {
    return (
        <React.Fragment>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand>
                    <Link
                        style={{color: '#fff', textDecoration: 'none'}} 
                        to='/'
                    >
                        Nashta Global
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <Nav>
                    <Nav.Item className='mx-3'>
                        <Link                    
                            style={{color: '#fff', textDecoration: 'none'}}
                            to='/form'
                        >
                            Add Event
                        </Link>
                    </Nav.Item>
                    <Nav.Item className='mx-3'>
                        <Link
                            style={{color: '#fff', textDecoration: 'none'}}
                            to='/dashboard'
                        >
                            Dashboard
                        </Link>
                    </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </React.Fragment>
    )
}
