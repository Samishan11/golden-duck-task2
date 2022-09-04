import React from 'react'
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from "react"
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Cookies from 'js-cookie';
function blog() {

    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDesc] = useState('');
    const [image, setImage] = useState('');
    const [portfolio, setPortfolio] = useState([]);

    const [change, setChange] = useState(false)

    const token = Cookies.get('accessToken')
    const config = {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "multipart/form-data",
            "Authorization": "Bearer " + token
        }
    }

    var fd = new FormData();
    fd.append("title", title)
    fd.append("description", description)
    fd.append("image", image)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    // add portfolio
    const addPortfolio = async () => {
        try {
            const res = await axios.post("https://golden-duck-it.herokuapp.com/api/v4/portfolio/post", config, fd)
            console.log(res)
            console.log("res")

        } catch (error) {
            console.log(error)
        }
    }
    // get all portfolio
    useEffect(() => {
        const getPortfolio = async () => {
            try {
                const res = await axios.get("https://golden-duck-it.herokuapp.com/api/v4/portfolio")
                console.log(res.data)
                setTitle(res.data.data.brand_name)
                setDesc(res.data.data.catagory)
                setImage(res.data.data.image)
                setPortfolio(res.data.data)
            } catch (error) {
                console.log(error)
            }
        }
        getPortfolio()
    }, [change])

    //  delete portfolio
    const deletePortfolio = async (id) => {
        try {
            const res = await axios.delete(`https://golden-duck-it.herokuapp.com/api/v4/portfolio/delete/${id}`, config)
            console.log(res)
            if (change) {
                setChange(false)
            } else {
                setChange(true)
            }
        } catch (error) {
            console.log(error)
        }
    }


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
                            <Form.Control onChange={e => setTitle(e.target.value)} type="" placeholder="Enter portfolio title" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Portfolio Description</Form.Label>
                            <Form.Control onChange={e => setDesc(e.target.value)} type="" placeholder="Enter portfolio catagory" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Portfolio Image</Form.Label>
                            <Form.Control onChange={e => setImage(e.target.files[0])} type="file" placeholder="" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button onClick={addPortfolio} variant="primary">Add Portfolio</Button>
                </Modal.Footer>
            </Modal>
            <div style={{ marginTop: "1rem" }} className="blogs">
                <Table striped bordered hover>
                    {
                        portfolio?.length === 0 ? <p>loading</p> :
                            <>
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
                                    {
                                        portfolio?.map((data, ind) => {
                                            return (
                                                <tr>
                                                    <td>{ind}</td>
                                                    <td>{data.brand_name}</td>
                                                    <td>{data.catagory}</td>
                                                    <td>Admin</td>
                                                    <td>{data.date}</td>
                                                    <td> <Button onClick={handleShow1} variant="outline-success">Edit</Button>  <Button onClick={deletePortfolio.bind(this, data._id)} variant="outline-danger">Delete</Button></td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </>
                    }

                </Table>
                <Modal
                    show={show1}
                    onHide={handleClose1}
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
                                <Form.Control value={'title'} onChange={e => setTitle(e.target.value)} type="" placeholder="Enter portfolio title" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Portfolio Description</Form.Label>
                                <Form.Control value={description} onChange={e => setDesc(e.target.value)} type="" placeholder="Enter portfolio catagory" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Portfolio Image</Form.Label>
                                <Form.Control onChange={e => setImage(e.target.files[0])} type="file" placeholder="" />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button onClick={addPortfolio} variant="primary">Add Portfolio</Button>
                    </Modal.Footer>
                </Modal>
            </div>

        </div>

    )
}

export default blog