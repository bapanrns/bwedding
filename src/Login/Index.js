import React, { Component } from 'react'
import ReactFormInputValidation from "react-form-input-validation";
import { useNavigate } from "react-router-dom";


//export class Index extends Component {
const Index = (e) => {
    let myStyle = {
        display: "block",
        backgroundColor: "#cccc"
    };
    const navigate = useNavigate();
    function loginUser(){
        localStorage.setItem("login", true);
        navigate("/profile");
        e.modalHide();
    }
        
    return (
      <>
        <div role="dialog" aria-modal="true" className="fade modal show" style={myStyle}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <div className="modal-title h4">Login to continue</div>
                        <button type="button" className="btn-close" aria-label="Close" onClick={e.modalHide}></button>
                    </div>
                    <div className="modal-body" style={{paddingBottom: 0}}>
                        <form className="">
                            <div className="mb-3 formValidation">
                                <label className="form-label" htmlFor="exampleForm.ControlInput1">Email address</label>
                                <input 
                                    placeholder="name@example.com" 
                                    type="email" 
                                    name='email'
                                    id="exampleForm.ControlInput1" 
                                    className="form-control" 
                                    />
                                {/*this.state.errors.email ? <label className="error"> {this.state.errors.email} </label> : ""*/}
                            </div>
                            <div className="mb-3 formValidation">
                                <label className="form-label" htmlFor="exampleForm.ControlInput2">Password</label>
                                <input 
                                    placeholder="********" 
                                    type="password" 
                                    name='password'
                                    id="exampleForm.ControlInput2" 
                                    className="form-control" 
                                    />
                                {/*this.state.errors.password ? <label className="error"> {this.state.errors.password} </label> : ""*/}
                            </div>
                            <div className="mb-3">
                                <button type="button" className="loginButton btn btn-primary" onClick={loginUser}>Login</button>
                            </div>
                            <div className="mb-3"> 
                                <div className="forgotPassword" onClick={e.forgotPassword}>Forgot Password</div>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="registerButton btn btn-secondary" onClick={e.signUp}>Register Free</button>
                    </div>
                </div>
            </div>
        </div>
      </>
    )
   // }
}

export default Index
