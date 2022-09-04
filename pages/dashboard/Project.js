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
    const[singleProject,setSingleProject] =  useState({});
    const[singleProjectTitle,setSingleProjectTitle] =  useState();
    const[singleProjectCategory,setSingleProjectCategory] =  useState();
    const[singleProjectImage,setSingleProjectImage] =  useState();
    const[singleProjectLink,setSingleProjectLink] =  useState();
    const[singleProjectId,setSingleProjectId] =  useState();

    const[projectDeleteId,setProjectDeleteId] = useState();


    const [show, setShow] = useState(false);
    const [showEdit, setEditShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleEditShow = (i) =>{ setEditShow(true)

      console.log(projects[i])
      setSingleProject(projects[i]);
      setSingleProjectTitle(projects[i].title)
      setSingleProjectLink(projects[i].link)

      setSingleProjectCategory(projects[i].category)
      setSingleProjectImage(projects[i].image)
      setSingleProjectId(projects[i]._id)


    }

    //------------------------------

    const handleEditClose = () => setEditShow(false)


    const [title,setTitle] = useState();
    const [description,setDescription] = useState();
    const [image, setImage] =  useState();

    const token = Cookies.get('accessToken');
    console.log(token);




    //------------------------------------------------

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

    const editFormData = new FormData();
    editFormData.append('projectId',singleProjectId)
    editFormData.append('title',singleProjectTitle);
    editFormData.append('category',singleProjectCategory);
    editFormData.append('image',singleProjectImage);
    editFormData.append('link',singleProjectLink);
    


    const addProject =async (e) =>{

      e.preventDefault();

      const response = await axios.post('https://golden-duck-it.herokuapp.com/api/v4/postProject',
      formData,
      );
    }

    const editProject = async (e) =>{

      console.log(editFormData)
      try{
        const response = await axios.put('https://golden-duck-it.herokuapp.com/api/v4/editProject',
        editFormData
      )
      }
      catch(err){
        console.log(err.message)
      }
    
    }


    const deleteProject = async (i) => {
      setProjectDeleteId(projects[i]._id)

      try{
          const response =  await axios.delete('https://golden-duck-it.herokuapp.com/api/v4/deleteProject',
            {projectDeleteId}
          ) 
          console.log(response);
      }catch(err){
        console.log(err.message)
      }
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
                            <Form.Label>Project Category</Form.Label>
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
              <th>Category</th>
              <th>Link</th>

              <th>Image</th>

              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index)=>{
                return (    
                <tr><td>{index+1}</td>

                    <td>{project.title}</td>
                    <td>{project.category}</td>
                    <td><a>{project.link}</a></td>

                    <td>{project.image}</td>
                    <td>2020 : 12: 01</td>
                    <td> <Button variant="outline-success" onClick={handleEditShow.bind(this,index)} >Edit</Button>  
                    <Button variant="outline-danger" onClick={deleteProject.bind(this,index)}>Delete</Button></td>
                  </tr>
                
                )
            })}
            
          </tbody>
        </Table>

        <Modal
                show={showEdit}
                onHide={handleEditClose}
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
                            <Form.Control value={singleProjectTitle}  onChange={e =>  setSingleProjectTitle(e.target.value)} type="" placeholder="Enter project title" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Project Category</Form.Label>
                            <Form.Control value={singleProjectCategory} onChange={e => setSingleProjectCategory(e.target.value)} type="" placeholder="Enter project catagory" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Project Link</Form.Label>
                            <Form.Control value={singleProjectLink} onChange={e => setSingleProjectLink(e.target.value)} type="" placeholder="Enter project link" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Project Image</Form.Label>
                            <Form.Control  onChange={(e)=>setSingleProjectImage(e.target.files[0])} type="file" placeholder="" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleEditClose}>
                        Close
                    </Button>
                    <Button onClick={editProject} variant="primary">Add Portfolio</Button>
                </Modal.Footer>
            </Modal>
      </div>
    </div>
        
  )
}


export default Project