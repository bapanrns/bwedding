import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';

//export class FirstPage extends Component {
const FirstPage = () => {

    const myStyle={
        backgroundImage: 
        "url('/static/media/home.a56633b88c04f808d5b9.jpg')",
        height:'100vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };

    return (
      <div style={myStyle}>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
            </Form>
      </div>
    )
}

export default FirstPage
