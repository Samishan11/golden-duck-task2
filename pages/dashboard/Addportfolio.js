import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.css';


const Addportfolio = () => {
    return (
        <div style={{ padding: "1rem" }}>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Portfolio Title</Form.Label>
                    <Form.Control type="email" placeholder="Enter portfolio title" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="email" placeholder="Enter portfolio catagory" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Portfolio Image</Form.Label>
                    <Form.Control type="file" placeholder="" />
                </Form.Group>
            </Form>
            <Button variant="outline-primary">Add Portfolio</Button>
        </div>
    )
}
export default Addportfolio;