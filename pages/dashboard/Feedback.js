import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import axios from "axios";

function feedback() {


    const [title,setTitle] = useState();
    const [description,setDescription] = useState();
    const [author,setAuthor] = useState();
    const [action,setAction] = useState();
    const[feedbacks,setFeedbacks] = useState([]);

    const getFeedback = async () =>{
        const response = await axios.get('https://golden-duck-it.herokuapp.com/api/v4/feedback');
        console.log(response.data.feedbacks);
        setFeedbacks(response.data.feedbacks)
    }

    useEffect  (() =>{
        getFeedback()
    },[])

  return (
      <div className='body'>
      <div className="blogs">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Feedback Title</th>
              <th>Description</th>
              <th>Aurthor</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {feedbacks.map((feedback, index)=>{
                return (    
                <tr><td>{index+1}</td>

                    <td>{feedback.title}</td>
                    <td>{feedback.description}</td>
                    <td>{feedback.author}</td>
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

export default feedback