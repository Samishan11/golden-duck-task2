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
                    <Form.Control type="email" placeholder="Enter blog title" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Portfolio Image</Form.Label>
                    <Form.Control type="file" placeholder="" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Blog Description</Form.Label>
                    <div style={{ height: "10rem" }} ref={quillRef} />
                </Form.Group>
            </Form>
            <Button variant="outline-primary">Add Blog</Button>
        </div>
    )
}
export default Addportfolio;