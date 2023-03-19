import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import {Container, Row, Form, Modal } from 'react-bootstrap';

import Select from 'react-select';

import '../components/profile.css';

import jsonData from '../components/Data.json'


const ProfileDetails = () => {
//export class ProfileDetails extends Component {
    const [file, setFile] = useState();
    const [states, setStates] = useState([]);

    function getState(value){
        if(jsonData["states"][value] !== undefined){
            setStates(jsonData["states"][value])
        }else{
            setStates([])
        }
    }

    function handleChange(e) {
        setFile(URL.createObjectURL(e.target.files[0]));
        const imageNameArray = e.target.files[0]['name'].split(".");
        const imageType = ["png", "jpg", "jpeg"]
        
        if(imageType.find(item=> item.includes(imageNameArray[imageNameArray.length-1].toString().toLowerCase())) !==undefined){
            handleShow();
        }else{
            alert("Accept only jpg, png and jpeg");
            e.target.value = null;
        }
        
    }

    function motherOccupation(e){
        console.log(e.value);
    }

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    /* For react select dropdown with serch */
    const [isClearable, setIsClearable] = useState(true);
    const [isSearchable, setIsSearchable] = useState(true);
    const [isDisabled, setIsDisabled] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isRtl, setIsRtl] = useState(false);
    /* For react select dropdown with serch */

        return (
            <div>



                
                <Container className='container-class'>
                    <Row> 
                    <Modal className='imageModal' show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title alt="img">Image</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <img alt="upload profile images" className='uploadProfileImages' src={file} />
                        </Modal.Body>
                    </Modal>

                        <div className='col-md-12' style={{marginTop: "20px"}}>
                            <Form>
                                <Tabs
                                defaultActiveKey="abouthim"
                                id="uncontrolled-tab-example"
                                className="mb-3"
                                >

                                    <Tab eventKey="abouthim" title="About Him">
                                        
                                        <div className='col-md-6 colmd6'>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Upload Image <span style={{fontSize: 8, fontWeight: 'bold'}}>[PNG, JPG & JPEG]</span><span className='requiredfield'> *</span></Form.Label>   
                                            <Form.Control type="file" onChange={handleChange} />
                                            </Form.Group>
                                        </div>
                                        <div className='col-md-6 colmd6'>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                                                <Form.Label>Email address<span className='requiredfield'> *</span></Form.Label>
                                                <Form.Control type="email" placeholder="name@example.com" />
                                            </Form.Group>
                                        </div>
                                        <div className='col-md-6 colmd6'>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                                                <Form.Label>Profile for<span className='requiredfield'> *</span></Form.Label>
                                                <Form.Select aria-label="Default select example">
                                                    <option value="myself1">Myself</option>
                                                    <option value="brother">Brother</option>
                                                    <option value="sister">Sister</option>
                                                    <option value="son">Son</option>
                                                    <option value="daughter">Daughter</option>
                                                    <option value="relative">Relative</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </div>
                                        <div className='col-md-6 colmd6'>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                                                <Form.Label>Name<span className='requiredfield'> *</span></Form.Label>
                                                <Form.Control type="text" placeholder="name" />
                                            </Form.Group>
                                        </div>
                                        <div className='col-md-6 colmd6'>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
                                                <Form.Label>Gender<span className='requiredfield'> *</span></Form.Label>
                                                <Form.Select aria-label="Default select example">
                                                    <option value="male">Male</option>
                                                    <option value="female">Female</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </div>
                                        <div className='col-md-6 colmd6'>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput6">
                                                <Form.Label>Marital Status<span className='requiredfield'> *</span></Form.Label>
                                                <Form.Select aria-label="Default select example">
                                                    <option value="single">Single (never married)</option>
                                                    <option value="divorced">divorced</option>
                                                    <option value="femwidowedale">Widowed</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </div>
                                        <div className='col-md-6 colmd6'>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput7">
                                                <Form.Label>Date of Birth<span className='requiredfield'> *</span></Form.Label>
                                                <Form.Control type="email" placeholder="name@example.com" />
                                            </Form.Group>
                                        </div>
                                        <div className='col-md-6 colmd6'>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput8">
                                                <Form.Label>Mobile number<span className='requiredfield'> *</span></Form.Label>
                                                <Form.Control type="text" placeholder="98********" />
                                            </Form.Group>
                                        </div>
                                        <div className='col-md-6 colmd6'>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput9">
                                                <Form.Label>Country<span className='requiredfield'> *</span></Form.Label>
                                                <Select
                                                    className="basic-single"
                                                    isMulti
                                                    classNamePrefix="select"
                                                    defaultValue={jsonData["country"][0]}
                                                    isDisabled={isDisabled}
                                                    isLoading={isLoading}
                                                    isClearable={isClearable}
                                                    isRtl={isRtl}
                                                    isSearchable={isSearchable}
                                                    name="country"
                                                    options={jsonData["country"]}
                                                    onChange={(e) => { 
                                                        getState(e.value)
                                                    }}
                                                />
                                            </Form.Group>
                                        </div>
                                        <div className='col-md-6 colmd6'>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput10">
                                                <Form.Label>State<span className='requiredfield'> *</span></Form.Label>
                                                <Select
                                                    className="basic-single"
                                                    classNamePrefix="select"
                                                    defaultValue={states[36]}
                                                    isDisabled={isDisabled}
                                                    isLoading={isLoading}
                                                    isClearable={isClearable}
                                                    isRtl={isRtl}
                                                    isSearchable={isSearchable}
                                                    name="country"
                                                    options={states}
                                                />
                                            </Form.Group>
                                        </div>
                                        <div className='col-md-6 colmd6'>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput11">
                                                <Form.Label>Distict<span className='requiredfield'> *</span></Form.Label>
                                                <Form.Select aria-label="Default select example">
                                                    <option value="single">India</option>
                                                    <option value="divorced">Bangladesh</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </div>
                                        <div className='col-md-6 colmd6'>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput12">
                                                <Form.Label>Pin code<span className='requiredfield'> *</span></Form.Label>
                                                <Form.Control type="text" placeholder="98********" />
                                            </Form.Group>
                                        </div>
                                        <div className='col-md-6 colmd6'>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput13">
                                                <Form.Label>City</Form.Label>
                                                <Form.Select aria-label="Default select example">
                                                    <option value="single">India</option>
                                                    <option value="divorced">Bangladesh</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </div>
                                        <div className='col-md-6 colmd6'>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput14">
                                                <Form.Label>Address</Form.Label>
                                                <Form.Control type="text" placeholder="98********" />
                                            </Form.Group>
                                        </div>
                                        <div className='col-md-6 colmd6'>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput15">
                                                <Form.Label>Mother Tongue<span className='requiredfield'> *</span></Form.Label>
                                                <Form.Select aria-label="Default select example">
                                                    <option value="bengali">Bengali</option>
                                                    <option value="hindi">Hindi</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </div>
                                        <div className='col-md-6 colmd6'>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput16">
                                                <Form.Label>Religion<span className='requiredfield'> *</span></Form.Label>
                                                <Form.Select aria-label="Default select example">
                                                    <option value="bengali">Hindu</option>
                                                    <option value="hindi">Muslim</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </div>
                                        <div className='col-md-6 colmd6'>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput17">
                                                <Form.Label>Caste/Division<span className='requiredfield'> *</span></Form.Label>
                                                <Form.Select aria-label="Default select example">
                                                    <option value="bengali">Hindu</option>
                                                    <option value="hindi">Muslim</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </div>
                                        <div className='col-md-6 colmd6'>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput18">
                                                <Form.Label>Sub-Caste<span className='requiredfield'> *</span></Form.Label>
                                                <Form.Select aria-label="Default select example">
                                                    <option value="bengali">Hindu</option>
                                                    <option value="hindi">Muslim</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </div>
                                    </Tab>
                                    <Tab eventKey="educationOccupation" title="Education & Occupation">
                                        <div className='col-md-6 colmd6'>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput19">
                                                <Form.Label>Highest Education<span className='requiredfield'> *</span></Form.Label>
                                                <Form.Select aria-label="Default select example">
                                                    <option value="Aeronautical Engineering">Aeronautical Engineering</option>
                                                    <option value="B.Arch">B.Arch</option>
                                                    <option value="BCA">BCA</option>
                                                    <option value="BE">BE</option>
                                                    <option value="B.Plan">B.Plan</option>
                                                    <option value="B.Sc IT/ Computer Science">B.Sc IT/ Computer Science</option>
                                                    <option value="B.Tech.">B.Tech.</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </div>
                                        <div className='col-md-6 colmd6'>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput20">
                                                <Form.Label>Employment Type<span className='requiredfield'> *</span></Form.Label>
                                                <Form.Select aria-label="Default select example">
                                                    <option value="Not Working">Not Working</option>
                                                    <option value="Full-time">Full-time</option>
                                                    <option value="part-time">part-time</option>
                                                    <option value="casual">casual</option>
                                                    <option value="contract">contract</option>
                                                    <option value="Apprenticeship">Apprenticeship</option>
                                                    <option value="Traineeship">Traineeship</option>
                                                    <option value="Employment on commission">Employment on commission</option>
                                                    <option value="probation">probation</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </div>
                                        <div className='col-md-6 colmd6'>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput21">
                                                <Form.Label>Occupation<span className='requiredfield'> *</span></Form.Label>
                                                <Form.Select name="occupation" aria-label="Default select example">
                                                    <option value="Agriculture">Agriculture</option>
                                                    <option value="Asha Workers">Asha Workers</option>
                                                    <option value="Automobile work">Automobile work</option>
                                                    <option value="Book binding">Book binding</option>
                                                    <option value="Health service">Health service</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </div>
                                        <div className='col-md-6 colmd6'>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput22">
                                                <Form.Label>Monthly Income<span className='requiredfield'> *</span></Form.Label>
                                                <Form.Control type="text" name="monthlyIncome" placeholder="Rs" />
                                            </Form.Group>
                                        </div>
                                    </Tab>

                                    {/* Family Details */}
                                    <Tab eventKey="familyDetails" title="Family Details">
                                        <div className='col-md-6 colmd6'>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput23">
                                                <Form.Label>Mother's Occupation</Form.Label>
                                                <Select
                                                    className="basic-single"
                                                    classNamePrefix="select"
                                                    defaultValue={jsonData["motherOccupation"][0]}
                                                    isDisabled={isDisabled}
                                                    isLoading={isLoading}
                                                    isClearable={isClearable}
                                                    isRtl={isRtl}
                                                    isSearchable={isSearchable}
                                                    name="motherOccupation"
                                                    onChange={motherOccupation}
                                                    options={jsonData["motherOccupation"]}
                                                />
                                            </Form.Group>
                                        </div>
                                        <div className='col-md-6 colmd6'>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput24">
                                                <Form.Label>Father's Occupation</Form.Label>
                                                <Select
                                                    className="basic-single"
                                                    classNamePrefix="select"
                                                    defaultValue={jsonData["fatherOccupation"][0]}
                                                    isDisabled={isDisabled}
                                                    isLoading={isLoading}
                                                    isClearable={isClearable}
                                                    isRtl={isRtl}
                                                    isSearchable={isSearchable}
                                                    name="fatherOccupation"
                                                    options={jsonData["fatherOccupation"]}
                                                />
                                            </Form.Group>
                                        </div>
                                        <div className='col-md-6 colmd6'>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput25">
                                                <Form.Label>Family Status</Form.Label>
                                                <Select
                                                    className="basic-single"
                                                    classNamePrefix="select"
                                                    defaultValue={jsonData["familyStatus"][0]}
                                                    isDisabled={isDisabled}
                                                    isLoading={isLoading}
                                                    isClearable={isClearable}
                                                    isRtl={isRtl}
                                                    isSearchable={isSearchable}
                                                    name="fatherOccupation"
                                                    options={jsonData["familyStatus"]}
                                                />
                                            </Form.Group>
                                        </div>
                                        <div className='col-md-6 colmd6'>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput26">
                                                <Form.Label>Family Income</Form.Label>
                                                <Select
                                                    className="basic-single"
                                                    classNamePrefix="select"
                                                    defaultValue={jsonData["familyIncome"][0]}
                                                    isDisabled={isDisabled}
                                                    isLoading={isLoading}
                                                    isClearable={isClearable}
                                                    isRtl={isRtl}
                                                    isSearchable={isSearchable}
                                                    name="fatherOccupation"
                                                    options={jsonData["familyIncome"]}
                                                />
                                            </Form.Group>
                                        </div>
                                        <div className='col-md-6 colmd6'>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput27">
                                                <Form.Label>Family Type</Form.Label>
                                                <Select
                                                    className="basic-single"
                                                    classNamePrefix="select"
                                                    defaultValue={jsonData["familyType"][0]}
                                                    isDisabled={isDisabled}
                                                    isLoading={isLoading}
                                                    isClearable={isClearable}
                                                    isRtl={isRtl}
                                                    isSearchable={isSearchable}
                                                    name="fatherOccupation"
                                                    options={jsonData["familyType"]}
                                                />
                                            </Form.Group>
                                        </div>
                                        <div className='col-md-6 colmd6'>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput28">
                                                <Form.Label>Family Values</Form.Label>
                                                <Select
                                                    className="basic-single"
                                                    classNamePrefix="select"
                                                    defaultValue={jsonData["familyValues"][0]}
                                                    isDisabled={isDisabled}
                                                    isLoading={isLoading}
                                                    isClearable={isClearable}
                                                    isRtl={isRtl}
                                                    isSearchable={isSearchable}
                                                    name="fatherOccupation"
                                                    options={jsonData["familyType"]}
                                                />
                                            </Form.Group>
                                        </div>
                                        <div className='col-md-6 colmd6'>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput29">
                                                <Form.Label>No of Sister</Form.Label>
                                                <Form.Control type="text" name="noOfSiblings" placeholder="No of Sister" />
                                                <Form.Label>How many married?</Form.Label>
                                                <Form.Control type="text" name="noOfSiblings" placeholder="How many sister married" />
                                            </Form.Group>
                                        </div>
                                        <div className='col-md-6 colmd6'>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput30">
                                                <Form.Label>No of Brother</Form.Label>
                                                <Form.Control type="text" name="noOfSiblings" placeholder="No of Brother" />
                                                <Form.Label>How many married?</Form.Label>
                                                <Form.Control type="text" name="noOfSiblings" placeholder="How many brother married" />
                                            </Form.Group>
                                        </div>
                                        <div className='col-md-6 colmd6'>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea31">
                                                <Form.Label>Introduce your Siblings</Form.Label>
                                                <Form.Control as="textarea" rows={3} />
                                            </Form.Group>
                                        </div>
                                    </Tab>
                            
                                </Tabs>
                            </Form>

                        </div>
                    </Row>
                </Container>
            </div>
        )
    
}

export default ProfileDetails
