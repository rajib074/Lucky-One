import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';

import './Header.css';


const Header = () => {
    return (
        <Navbar bg="light" variant="light">
                <Navbar.Brand href="#home">Rozil Kazi Photography</Navbar.Brand>
        </Navbar>
    );
};

export default Header;