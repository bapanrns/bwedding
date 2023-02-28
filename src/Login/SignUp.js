import React, { Component } from 'react'
import {Form } from 'react-bootstrap';
import ReactFormInputValidation from "react-form-input-validation";
import { withRouter  } from "react-router-dom";

export class SignUp extends Component {
    constructor(props) {
        super(props);
        this.profileForSex = this.profileForSex.bind(this);
        this.state = {
            profileFor: "brother",
            sex: "male",
            sexOpenHide: {
                display: "none"
            },
            sexOpenHideReadonly: {
                display: "block"
            },
            fields: {
                email: "",
                password: "",
                cpassword: ""
            },
            errors: {}
        };
        
    
        this.form = new ReactFormInputValidation(this);
        this.form.useRules({
            password: "required",
            cpassword: "required",
            email: "required|email"
        });
        this.form.onformsubmit = (fields) => {
            //console.log(this.state.errors)
            if(Object.keys(this.state.errors).length === 0){
                alert('Login');
                this.props.history.push("/");
            }
        }
        
    }
    

    async profileForSex(e) {
        //console.log(e.target.value);
        await this.setState({profileFor: e.target.value})
        if(this.state.profileFor === "myself" || this.state.profileFor === "relative"){
            //console.log("profileForSex--- IF");
            this.setState({
                sexOpenHide: {
                    display: "block"
                },
                sexOpenHideReadonly: {
                    display: "none"
                }
            })
        }else{
            //this.setState({sex: "female"}, () => {console.log(this.state.sex, "-------------state")})
            this.setState({sex: "female"});
            if(this.state.profileFor === "brother" || this.state.profileFor === "son"){
                await this.setState({sex: "male"})
            }
            
            this.setState({
                sexOpenHide: {
                    display: "none"
                },
                sexOpenHideReadonly: {
                    display: "block"
                }
            })
            
        }
    }

  render() {
    let myStyle = {
        display: "block",
        backgroundColor: "#cccc"
    };
    return (
     <>
        <div role="dialog" aria-modal="true" className="fade modal show" style={myStyle}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <div className="modal-title h4">Sign Up Free</div>
                        <button type="button" className="btn-close" aria-label="Close" onClick={this.props.modalHide}></button>
                    </div>
                    <div className="modal-body" style={{paddingBottom: 0}}>
                        <form className="" onSubmit={this.form.handleSubmit}>
                            <div className="mb-3 formValidation">
                                <Form.Label>Profile for<span className='requiredfield'> *</span></Form.Label>    
                                <select className="form-select" name="profileFor" defaultValue={this.state.profileFor} onChange={this.profileForSex}>
                                    <option value="myself">Myself</option>
                                    <option value="brother">Brother</option>
                                    <option value="sister">Sister</option>
                                    <option value="son">Son</option>
                                    <option value="daughter">Daughter</option>
                                    <option value="relative">Relative</option>
                                </select>
                                
                            </div>
                            <div className="mb-3 formValidation" style={this.state.sexOpenHideReadonly}>
                                <Form.Label style={{textTransform: 'capitalize'}}>Sex: {this.state.sex}</Form.Label>
                            </div>
                            <div className="mb-3 formValidation" style={this.state.sexOpenHide}>
                                <Form.Label>Sex<span className='requiredfield'> *</span></Form.Label>    
                                <select className="form-select" name="sex" defaultValue={this.state.sex} onChange={(e)=>this.setState({ value: e.target.value })}>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                            <div className="mb-3 formValidation">
                                <label className="form-label" htmlFor="exampleForm.ControlInput1">Email address</label>
                                <input 
                                    placeholder="name@example.com" 
                                    type="email" 
                                    name='email'
                                    id="exampleForm.ControlInput1" 
                                    className="form-control" 
                                    onBlur={this.form.handleBlurEvent}
                                    onChange={this.form.handleChangeEvent}
                                    value={this.state.fields.email}
                                    />
                                    {this.state.errors.email ? <label className="error"> {this.state.errors.email} </label> : ""}
                                    
                            </div>
                            <div className="mb-3 formValidation">
                                <label className="form-label" htmlFor="exampleForm.ControlInput2">Password</label>
                                <input 
                                    placeholder="********" 
                                    type="password" 
                                    name='password'
                                    id="exampleForm.ControlInput2" 
                                    className="form-control" 
                                    onBlur={this.form.handleBlurEvent}
                                    onChange={this.form.handleChangeEvent}
                                    value={this.state.fields.password}
                                />
                                {this.state.errors.password ? <label className="error"> {this.state.errors.password} </label> : ""}
                            </div>
                            <div className="mb-3 formValidation">
                                <label className="form-label" htmlFor="exampleForm.ControlInputc">Confirm password</label>
                                <input 
                                    placeholder="********" 
                                    type="password" 
                                    name='cpassword'
                                    id="exampleForm.ControlInputc" 
                                    className="form-control" 
                                    onBlur={this.form.handleBlurEvent}
                                    onChange={this.form.handleChangeEvent}
                                    value={this.state.fields.cpassword}
                                />
                                {this.state.errors.cpassword ? <label className="error"> {this.state.errors.cpassword} </label> : ""}
                            </div>
                            <div className="mb-3">
                                <button type="submit" className="loginButton btn btn-primary">Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
     </>
    )
  }
}

export default SignUp
