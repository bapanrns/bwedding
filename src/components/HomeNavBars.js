import React, {  useState } from 'react'
import {Container, Row } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Login from '../Login/Index';
import ForgotPassword from '../Login/ForgotPassword';
import NewPasswordModal from '../Login/NewPassword';
import SignUp from '../Login/SignUp';

import './profile.css';

import {
    Link,
    useLocation
  } from "react-router-dom";
  const HomeNavBars = () => {
//export class NavBars extends Component {
    //const location = useLocation();
    //console.log(location);
 
    /* --------------- For Login Modal start */
    const [loginModal, setLoginModal] = useState(false)
    function openLoginModal(){
        setLoginModal(true);
    }
    /* --------------- For Login Modal end */

    /* ---------------- For Forgot Password start */
    const [forgotPassModal, setForgotPassModal] = useState(false)
    function forgotPasswordOpen(){
        // First hide Login form
        setLoginModal(false);
        // Open Forgot password modal
        setForgotPassModal(true);
    }

    function hideForgotPasswordModal(){
        setForgotPassModal(false);
    }
    /* ---------------- For Forgot Password end */

    /* ---------------- For New Password start */
    const [newPassModal, setNewPassModal] = useState(false)
    function newPasswordOpen(){
        // Open New password modal
        setNewPassModal(true);
    }

    function hideNewPasswordModal(){
        // Close New password modal
        setNewPassModal(false);
    }
    /* ---------------- For New Password end */

    /* ---------------- For New Password start */
    const [signUpModal, setSignUpModal] = useState(false)
    function signUpModalOpen(){
        // First hide Login form
        setLoginModal(false);
        setSignUpModal(true);
    }
    /* ---------------- For New Password end */

        return (
            <div>
                <Container className='container-class'>
                    <Row> 
                        <Navbar expand="lg" className='navbarClass'>
                            <Container>
                                <Navbar.Brand href="#home">Bweedding</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav>
                                        <a className="nav-link" href="#" onClick={openLoginModal} style={{paddingTop: 13}}>Log In</a>
                                        <a className="nav-link" href="#" onClick={signUpModalOpen} style={{paddingTop: 13}}>Sign Up</a>
                                    </Nav>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar> 
                    </Row>
                </Container>
                
                {
                    /* Login Modal */
                    loginModal === true ? <Login modalHide={()=>setLoginModal(false)} forgotPassword={forgotPasswordOpen} signUp={signUpModalOpen}/>:""
                }

                {
                    /* Forgot password modal */
                    forgotPassModal === true ? <ForgotPassword modalHide={ hideForgotPasswordModal } openNewPassword={newPasswordOpen}/> : ""
                }

                {
                    newPassModal === true ? <NewPasswordModal modalHide={hideNewPasswordModal}/> : ""
                }

                {
                    signUpModal === true ? <SignUp modalHide={()=>setSignUpModal(false)} /> : ""
                }

            </div>
        )
    
}

export default HomeNavBars
