import React from 'react'
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import { useState } from "react"
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
function blog() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className='body' style={{ padding: "1rem" }}>
            <Button onClick={handleShow} variant="outline-success" className='link' smooth={true} style={{ textDecoration: "none" }} >Add Portfolio</Button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Portfolio Title</Form.Label>
                            <Form.Control type="email" placeholder="Enter portfolio title" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Portfolio Description</Form.Label>
                            <Form.Control type="email" placeholder="Enter portfolio catagory" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Portfolio Image</Form.Label>
                            <Form.Control type="file" placeholder="" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">Understood</Button>
                </Modal.Footer>
            </Modal>
            <div style={{ marginTop: "1rem" }} className="blogs">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Blog Title</th>
                            <th>Description</th>
                            <th>Aurthor</th>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td> <Button variant="outline-success">Edit</Button>  <Button variant="outline-danger">Delete</Button></td>
                        </tr>
                    </tbody>
                </Table>
            </div>

        </div>

    )
}

export default blog