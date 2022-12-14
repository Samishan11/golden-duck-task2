import React from 'react'
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from "react"
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import FormData from "form-data";
import {toast} from "react-toastify";

function Portfolio() {

    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [id, setId] = useState('');
    const [brand_name, setBrandname] = useState('');
    const [catagory, setCatagory] = useState('');
    const [image, setImage] = useState('');
    const [brand_name1, setBrandname1] = useState('');
    const [catagory1, setCatagory1] = useState('');
    const [image1, setImage1] = useState('');
    const [portfolio, setPortfolio] = useState([]);

    const [change, setChange] = useState(false)
    var fd = new FormData();
    fd.append("brand_name", brand_name)
    fd.append("catagory", catagory)
    fd.append("image", image)

    // 
    var fdedit = new FormData();
    fdedit.append("id", id)
    fdedit.append("brand_name", brand_name1)
    fdedit.append("catagory", catagory1)
    fdedit.append("image", image1)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    // add portfolio
    const addPortfolio = async () => {
        try {
            handleClose()
            const res = await axios.post("https://golden-duck-it.herokuapp.com/api/v4/portfolio/post", fd)
            if (res.data.success) {
                toast.success('Portfolio add sucessfully', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            } else {
                toast.error('Something went wrong', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
            setBrandname('')
            setCatagory('')
            setImage('')

            if (change) {
                setChange(false)
            } else {
                setChange(true)
            }
        } catch (error) {
            console.log(error)
        }
    }

    // edit portfolio
    const editPortfolio = async () => {
        handleClose1()
        try {
            const res = await axios.put(`http://golden-duck-it.herokuapp.com/api/v4/portfolioUpdate`, fdedit)
            if (res.data.success) {
                toast.success('Portfolio edit sucessfully', {
                  position: "top-right",
                  autoClose: 2000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });
              } else {
                toast.error('Something went wrong', {
                  position: "top-right",
                  autoClose: 2000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });
              }
            setBrandname('')
            setCatagory('')
            setImage('')

            if (change) {
                setChange(false)
            } else {
                setChange(true)
            }
        } catch (error) {
            console.log(error)
        }
    }

    // get all portfolio
    useEffect(() => {
        const getPortfolio = async () => {
            try {
                const res = await axios.get("https://golden-duck-it.herokuapp.com/api/v4/portfolio")
                setPortfolio(res.data.data)
                console.log(res.data.data)
            } catch (error) {
                console.log(error)
            }
        }
        getPortfolio()
    }, [change])

    // get single portfolio
    const getSinglePortfolio = (i) => {
        const res = portfolio[i]
        console.log(res)
        setBrandname1(res.brand_name)
        setId(res._id)
        setCatagory1(res.catagory)
        setImage1(res.imgae)

    }

    //  delete portfolio
    const deletePortfolio = async (id) => {
        try {
            const res = await axios.delete(`https://golden-duck-it.herokuapp.com/api/v4/portfolio/delete/${id}`)
            if (res.data.success) {
                toast.success('Portfolio delete sucessfully', {
                  position: "top-right",
                  autoClose: 2000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });
              } else {
                toast.error('Something went wrong', {
                  position: "top-right",
                  autoClose: 2000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });
              }
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
        <div className='body' style={{ padding: "1rem", width: "100%" }}>
            <Button onClick={handleShow} variant="outline-success" className='link' smooth={true} style={{ textDecoration: "none" }} >Add Portfolio</Button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add Portfolio</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Portfolio Title</Form.Label>
                            <Form.Control onChange={e => setBrandname(e.target.value)} type="" placeholder="Enter portfolio title" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Portfolio Description</Form.Label>
                            <Form.Control onChange={e => setCatagory(e.target.value)} type="" placeholder="Enter portfolio catagory" />
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
                                        <th>Portfolio Title</th>
                                        <th>Catagory</th>
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
                                                    <td> <Button onClick={() => { handleShow1(); getSinglePortfolio(ind); }} variant="outline-success">Edit</Button>  <Button onClick={deletePortfolio.bind(this, data._id)} variant="outline-danger">Delete</Button></td>
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
                        <Modal.Title>Edit Portfolio</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Portfolio Title</Form.Label>
                                <Form.Control value={brand_name1} onChange={e => setBrandname1(e.target.value)} type="" placeholder="Enter portfolio title" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Portfolio Description</Form.Label>
                                <Form.Control value={catagory1} onChange={e => setCatagory1(e.target.value)} type="" placeholder="Enter portfolio catagory" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Portfolio Image</Form.Label>
                                <Form.Control onChange={e => setImage1(e.target.files[0])} type="file" placeholder="" />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button onClick={editPortfolio.bind(this)} variant="primary">Edit Portfolio</Button>
                    </Modal.Footer>
                </Modal>
            </div>

        </div>

    )
}

export default Portfolio;