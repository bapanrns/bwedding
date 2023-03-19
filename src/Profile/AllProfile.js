import React, { Component } from 'react'
import {Card, Container, Row} from 'react-bootstrap';
import '../App.css';

import {
    Link
  } from "react-router-dom";

export class AllProfile extends Component {
    constructor(props) {
        super(props);
        this.viewProfile = this.viewProfile.bind(this);
    }

    viewProfile = () => {
        alert();
    }


    render() {
        return (
            <div>
                <Container className='container-class'>
                    <Row> 
                        <div className='col-md-3'>
                            <Card className='Card-class'>
                                <Card.Img className='card-profile-image' variant="top" src={`${process.env.PUBLIC_URL}/assets/images/DSC_5877.JPG`} />
                                <Card.Body>
                                    <Card.Title>Tumpa Mahapatra</Card.Title>
                                    <Card.Text className='card-text-info'>Sub assistant engineer</Card.Text>
                                    <Card.Text className='card-text-info'>Date of Birth: 15-02-1990</Card.Text>
                                    <Card.Text className='card-text-info'>Religion: Hindu</Card.Text>
                                    <Card.Text className='card-text-info'>Height: 5'6"</Card.Text>
                                </Card.Body>
                                <Card.Footer className='view-profile' onClick={this.viewProfile}>
                                    <small>View Profile</small>
                                </Card.Footer>
                                
                            </Card>
                        </div>
                        <div className='col-md-3'>
                        <Card className='Card-class'>
                                <Card.Img className='card-profile-image' variant="top" src={`${process.env.PUBLIC_URL}/assets/images/DSC_5877.JPG`} />
                                <Card.Body>
                                    <Card.Title>Tumpa Mahapatra</Card.Title>
                                    <Card.Text className='card-text-info'>Sub assistant engineer</Card.Text>
                                    <Card.Text className='card-text-info'>Date of Birth: 15-02-1990</Card.Text>
                                    <Card.Text className='card-text-info'>Religion: Hindu</Card.Text>
                                    <Card.Text className='card-text-info'>Height: 5'6"</Card.Text>
                                </Card.Body>
                                <Card.Footer className='view-profile' onClick={this.viewProfile}>
                                    <small>View Profile</small>
                                </Card.Footer>
                            </Card>
                        </div>
                        <div className='col-md-3'>
                        <Card className='Card-class'>
                                <Card.Img className='card-profile-image' variant="top" src={`${process.env.PUBLIC_URL}/assets/images/DSC_5877.JPG`} />
                                <Card.Body>
                                    <Card.Title>Tumpa Mahapatra</Card.Title>
                                    <Card.Text className='card-text-info'>Sub assistant engineer</Card.Text>
                                    <Card.Text className='card-text-info'>Date of Birth: 15-02-1990</Card.Text>
                                    <Card.Text className='card-text-info'>Religion: Hindu</Card.Text>
                                    <Card.Text className='card-text-info'>Height: 5'6"</Card.Text>
                                </Card.Body>
                                <Card.Footer className='view-profile' onClick={this.viewProfile}>
                                    <small>View Profile</small>
                                </Card.Footer>
                            </Card>
                        </div>
                        <div className='col-md-3'>
                        <Card className='Card-class'>
                                <Card.Img className='card-profile-image' variant="top" src={`${process.env.PUBLIC_URL}/assets/images/DSC_5877.JPG`} />
                                <Card.Body>
                                    <Card.Title>Tumpa Mahapatra</Card.Title>
                                    <Card.Text className='card-text-info'>Sub assistant engineer</Card.Text>
                                    <Card.Text className='card-text-info'>Date of Birth: 15-02-1990</Card.Text>
                                    <Card.Text className='card-text-info'>Religion: Hindu</Card.Text>
                                    <Card.Text className='card-text-info'>Height: 5'6"</Card.Text>
                                </Card.Body>
                                <Card.Footer className='view-profile' onClick={this.viewProfile}>
                                    <small>View Profile</small>
                                </Card.Footer>
                            </Card>
                        </div>
                        <div className='col-md-3'>
                        <Card className='Card-class'>
                                <Card.Img className='card-profile-image' variant="top" src={`${process.env.PUBLIC_URL}/assets/images/DSC_5877.JPG`} />
                                <Card.Body>
                                    <Card.Title>Tumpa Mahapatra</Card.Title>
                                    <Card.Text className='card-text-info'>Sub assistant engineer</Card.Text>
                                    <Card.Text className='card-text-info'>Date of Birth: 15-02-1990</Card.Text>
                                    <Card.Text className='card-text-info'>Religion: Hindu</Card.Text>
                                    <Card.Text className='card-text-info'>Height: 5'6"</Card.Text>
                                </Card.Body>
                                <Card.Footer className='view-profile' onClick={this.viewProfile}>
                                    <small>View Profile</small>
                                </Card.Footer>
                            </Card>
                        </div>
                        <div className='col-md-3'>
                        <Card className='Card-class'>
                                <Card.Img className='card-profile-image' variant="top" src={`${process.env.PUBLIC_URL}/assets/images/DSC_5877.JPG`} />
                                <Card.Body>
                                    <Card.Title>Tumpa Mahapatra</Card.Title>
                                    <Card.Text className='card-text-info'>Sub assistant engineer</Card.Text>
                                    <Card.Text className='card-text-info'>Date of Birth: 15-02-1990</Card.Text>
                                    <Card.Text className='card-text-info'>Religion: Hindu</Card.Text>
                                    <Card.Text className='card-text-info'>Height: 5'6"</Card.Text>
                                </Card.Body>
                                <Card.Footer className='view-profile' onClick={this.viewProfile}>
                                    <small>View Profile</small>
                                </Card.Footer>
                            </Card>
                        </div>
                        <div className='col-md-3'>
                        <Card className='Card-class'>
                                <Card.Img className='card-profile-image' variant="top" src={`${process.env.PUBLIC_URL}/assets/images/DSC_5877.JPG`} />
                                <Card.Body>
                                    <Card.Title>Tumpa Mahapatra</Card.Title>
                                    <Card.Text className='card-text-info'>Sub assistant engineer</Card.Text>
                                    <Card.Text className='card-text-info'>Date of Birth: 15-02-1990</Card.Text>
                                    <Card.Text className='card-text-info'>Religion: Hindu</Card.Text>
                                    <Card.Text className='card-text-info'>Height: 5'6"</Card.Text>
                                </Card.Body>
                                <Card.Footer className='view-profile' onClick={this.viewProfile}>
                                    <small>View Profile</small>
                                </Card.Footer>
                            </Card>
                        </div>
                        <div className='col-md-3'>
                        <Card className='Card-class'>
                                <Card.Img className='card-profile-image' variant="top" src={`${process.env.PUBLIC_URL}/assets/images/DSC_5877.JPG`} />
                                <Card.Body>
                                    <Card.Title>Tumpa Mahapatra</Card.Title>
                                    <Card.Text className='card-text-info'>Sub assistant engineer</Card.Text>
                                    <Card.Text className='card-text-info'>Date of Birth: 15-02-1990</Card.Text>
                                    <Card.Text className='card-text-info'>Religion: Hindu</Card.Text>
                                    <Card.Text className='card-text-info'>Height: 5'6"</Card.Text>
                                </Card.Body>
                                <Card.Footer className='view-profile' onClick={this.viewProfile}>
                                    <small>View Profile</small>
                                </Card.Footer>
                            </Card>
                        </div>
                        <div className='col-md-3'>
                        <Card className='Card-class'>
                                <Card.Img className='card-profile-image' variant="top" src={`${process.env.PUBLIC_URL}/assets/images/DSC_5877.JPG`} />
                                <Card.Body>
                                    <Card.Title>Tumpa Mahapatra</Card.Title>
                                    <Card.Text className='card-text-info'>Sub assistant engineer</Card.Text>
                                    <Card.Text className='card-text-info'>Date of Birth: 15-02-1990</Card.Text>
                                    <Card.Text className='card-text-info'>Religion: Hindu</Card.Text>
                                    <Card.Text className='card-text-info'>Height: 5'6"</Card.Text>
                                </Card.Body>
                                <Card.Footer className='view-profile' onClick={this.viewProfile}>
                                    <small>View Profile</small>
                                </Card.Footer>
                            </Card>
                        </div>
                        <div className='col-md-3'>
                        <Card className='Card-class'>
                                <Card.Img className='card-profile-image' variant="top" src={`${process.env.PUBLIC_URL}/assets/images/DSC_5877.JPG`} />
                                <Card.Body>
                                    <Card.Title>Tumpa Mahapatra</Card.Title>
                                    <Card.Text className='card-text-info'>Sub assistant engineer</Card.Text>
                                    <Card.Text className='card-text-info'>Date of Birth: 15-02-1990</Card.Text>
                                    <Card.Text className='card-text-info'>Religion: Hindu</Card.Text>
                                    <Card.Text className='card-text-info'>Height: 5'6"</Card.Text>
                                </Card.Body>
                                <Card.Footer className='view-profile' onClick={this.viewProfile}>
                                    <small>View Profile</small>
                                </Card.Footer>
                            </Card>
                        </div>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default AllProfile
