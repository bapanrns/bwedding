import React from 'react'
import {Container, Row } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { useNavigate } from "react-router-dom";

import './profile.css';

import {
    Link
  } from "react-router-dom";
  const NavBars = () => {
//export class NavBars extends Component {
    const navigate = useNavigate();

    function loginOut(){
        localStorage.setItem("login", false);
        localStorage.clear();
        navigate("/");
        window.location.reload(false);
    }
        return (
            <div>
                <Container className='container-class'>
                    <Row> 
                        <Navbar expand="lg" className='navbarClass'>
                            <Container>
                                <Navbar.Brand href="#home">Bweedding</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="me-auto">
                                    
                                        <Link className='nav-link' to="/">Home</Link>
                                        <Link className='nav-link' to="/profile">All Profile</Link>
                                        <Link className='nav-link' to="/profiledetails/1">Profile Details</Link>
                                        <Link className='nav-link' to="/test">Test</Link>
                                    </Nav>
                                    <Nav>
                                        <a className="nav-link" href="#" onClick={loginOut} style={{paddingTop: 13}}>Log Out</a>
                                        <Link className='nav-link profileIcon' to="/profiledetails/1">
                                            <img alt="profile icon" src={require('../Utility/Public/Images/home.jpg')}></img>
                                        </Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar> 
                    </Row>
                </Container>
            </div>
        )
    
}

export default NavBars
