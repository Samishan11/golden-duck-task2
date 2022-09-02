import React from 'react'
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import { useState, useEffect } from 'react';

function Project() {


    const[projects,setProjects] = useState([]);

    const getProject = async () =>{
      
        const response = await axios.get('https://golden-duck-it.herokuapp.com/api/v4/getProject');
        console.log(response);
        console.log(response.data.projects)
        setProjects(response.data.projects)
    }

    useEffect  (() =>{
        getProject();
    },[])

  return (
      <div className='body'>
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