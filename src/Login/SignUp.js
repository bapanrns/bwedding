import React, { useState, useEffect } from 'react'
import {Form } from 'react-bootstrap';
import { Lang, useFormInputValidation } from "react-form-input-validation";
import { withRouter  } from "react-router-dom";


const SignUp = (e) => {
//export class SignUp extends Component {
   
    /* Form Validation start */

    const [fields, errors, form] = useFormInputValidation(
        {
         
          email_address: "",
          password: "",
          password_confirmation: "",
          profileFor: "male"
        },
        {
          email_address: "required|email",
          password: "required|confirmed",
          password_confirmation: "required|same:password",
          profileFor: "required"
        }
      );
    
      useEffect(() => {
       /* form.registerAsync("username_available", function (
          username,
          attribute,
          req,
          passes
        ) {
          setTimeout(() => {
            if (username === "foo")
              passes(false, "Username has already been taken.");
            // if username is not available
            else passes();
          }, 1000);
        });*/
      }, []);
    
      form.useLang(Lang.en);

      const onSubmit = async (event) => {
        const isValid = await form.validate(event);

        if (isValid) {
          console.log("MAKE AN API CALL", fields, errors);
        }
      };
    
      useEffect(() => {
        /*if (form.isValidForm) {
          console.log("MAKE AN API CALL ==> useEffect", fields, errors, form);
        }*/
      }, []);


    /* Form Validation end */

    let myStyle = {
        display: "block",
        backgroundColor: "#cccc"
    };

    const [sexOpenHide, setSexOpenHide] = useState({
         'display': "none"
    });

    const [sexOpenHideSelect, setSexOpenHideSelect] = useState({
        'display': "block"
    });

    const [sex, setSex] = useState("male");

    const [profileFor, setprofileFor] = useState("myself");

    async function profileForSex(e){
        //console.log(e.target.value)
        await setprofileFor(e.target.value)
        if(e.target.value === "myself" || e.target.value === "relative"){
            await  setSexOpenHide({
                display: "none"
            })

            await   setSexOpenHideSelect({
                display: "block"
            })
        }else{
            await  setSex("female");
            if(e.target.value === "brother" || e.target.value === "son"){
                await setSex("male");
            }

            await setSexOpenHide({
                display: "block"
            })
 
            await setSexOpenHideSelect({
                display: "none"
            })
        }
    }




    return (
     <>
        <div role="dialog" aria-modal="true" className="fade modal show" style={myStyle}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <div className="modal-title h4">Sign Up Free</div>
                        <button type="button" className="btn-close" aria-label="Close" onClick={e.modalHide}></button>
                    </div>
                    <div className="modal-body" style={{paddingBottom: 0}}>
                        <form 
                            className="myForm"
                            noValidate
                            autoComplete="off"
                            onSubmit={onSubmit}>
                            <div className="mb-3 formValidation">
                                <Form.Label>Profile for<span className='requiredfield'> *</span></Form.Label>    
                                <select className="form-select" name="profileFor" defaultValue={profileFor} onChange={profileForSex}>
                                    <option value="myself">Myself</option>
                                    <option value="brother">Brother</option>
                                    <option value="sister">Sister</option>
                                    <option value="son">Son</option>
                                    <option value="daughter">Daughter</option>
                                    <option value="relative">Relative</option>
                                </select>
                                
                            </div>
                            <div className="mb-3 formValidation" style={sexOpenHide}>
                                <Form.Label style={{textTransform: 'capitalize'}}>Sex: {sex}</Form.Label>
                            </div>
                            <div className="mb-3 formValidation" style={sexOpenHideSelect}>
                                <Form.Label>Sex<span className='requiredfield'> *</span></Form.Label>    
                                <select className="form-select" name="sex" defaultValue={sex}>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                            <div className="mb-3 formValidation">
                                <label className="form-label" htmlFor="exampleForm.ControlInput1">Email address</label>
                                <input 
                                    placeholder="name@example.com" 
                                    type="email" 
                                    name='email_address'
                                    id="exampleForm.ControlInput1" 
                                    className="form-control" 
                                    onBlur={form.handleBlurEvent}
                                    onChange={form.handleChangeEvent}
                                    value={fields.email_address}
                                    />
                                    {errors.email_address ? <label className="error"> {errors.email_address} </label> : ""}
                                    
                            </div>
                            <div className="mb-3 formValidation">
                                <label className="form-label" htmlFor="exampleForm.ControlInput2">Password</label>
                                <input 
                                    placeholder="********" 
                                    type="password" 
                                    name='password'
                                    id="exampleForm.ControlInput2" 
                                    className="form-control" 
                                    onBlur={form.handleBlurEvent}
                                    onChange={form.handleChangeEvent}
                                    value={fields.password}
                                />
                                {errors.password ? <label className="error"> {errors.password} </label> : ""}
                            </div>
                            <div className="mb-3 formValidation">
                                <label className="form-label" htmlFor="exampleForm.ControlInputc">Confirm password</label>
                                <input 
                                    placeholder="********" 
                                    type="password" 
                                    name='password_confirmation'
                                    id="exampleForm.ControlInputc" 
                                    className="form-control" 
                                    onBlur={form.handleBlurEvent}
                                    onChange={form.handleChangeEvent}
                                    value={fields.password_confirmation}
                                />
                                {errors.password_confirmation ? <label className="error"> {errors.password_confirmation} </label> : ""}
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
 // }
}

export default SignUp
