import React, { Component, useState } from 'react'
import {Container, Row, Modal } from 'react-bootstrap';
import '../Utility/Public/css/home.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Home = () => {

  const [imageUrl, setImageUrl] = useState(require('../Utility/Public/Images/home.jpg'));

  const myStyle={
    backgroundImage: 
"url('/static/media/home.a56633b88c04f808d5b9.jpg')",
    height:'100vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};

  return (
    <div>
      <Container className='container-class'>
        <Row> 
          <div className='col-md-12 homePage' style={myStyle}>
            <div className="col-md-4 homeRegistration">
              <Form>
                <div className='col-md-12 colmd6'>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                </div>
              </Form>
            </div>
          </div>
          {/*<img src={require('../Utility/Public/Images/home.jpg')} style={{width: "100%"}} />*/}
        </Row>
      </Container>
    </div>
  )
}

export default Home
