import React from 'react'
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form'
import Cookies from 'js-cookie';
import axios from "axios";

function Project() {


    const[projects,setProjects] = useState([]);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [title,setTitle] = useState();
    const [description,setDescription] = useState();
    const [image, setImage] =  useState();

    const token = Cookies.get('accessToken');
    console.log(token);

 


    const getProject = async () =>{
      
        const response = await axios.get('https://golden-duck-it.herokuapp.com/api/v4/getProject');
        console.log(response);
        console.log(response.data.projects)
        setProjects(response.data.projects)
    }

    useEffect  (() =>{
        getProject();
    },[])

    const formData = new FormData();
    formData.append("title",title);
    formData.append("description",description);
    formData.append("image",image);

    const addProject =async (e) =>{

      e.preventDefault();

      const response = await axios.post('https://golden-duck-it.herokuapp.com/api/v4/postProject',
      formData,
      );
    }



  return (
      <div className='body'>
            <Button onClick={handleShow} variant="outline-success" className='link' smooth={true} style={{ textDecoration: "none" }} >Add Project</Button>

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
                            <Form.Label>Project Title</Form.Label>
                            <Form.Control onChange={e => setTitle(e.target.value)} type="" placeholder="Enter project title" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Project Description</Form.Label>
                            <Form.Control onChange={e => setDescription(e.target.value)} type="" placeholder="Enter project catagory" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Project Image</Form.Label>
                            <Form.Control onChange={e => setImage(e.target.files[0])} type="file" placeholder="" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button onClick={addProject} variant="primary">Add Portfolio</Button>
                </Modal.Footer>
            </Modal>
      <div className="blogs">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Project Title</th>
              <th>Description</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index)=>{
                return (    
                <tr><td>{index+1}</td>

                    <td>{project.title}</td>
                    <td>{project.description}</td>
                    <td>{project.category}</td>
                    <td>2020 : 12: 01</td>
                    <td> <Button variant="outline-success">Edit</Button>  <Button variant="outline-danger">Delete</Button></td>
                  </tr>
                
                )
            })}
            
          </tbody>
        </Table>
      </div>
    </div>
        
  )
}


export default Project