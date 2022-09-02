import React from 'react'
import Style from "../../public/static/adminblog.module.css";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import {useState} from "react"
import Link from "next/link"
import Addblog from './addblog';
function blog() {

    const [blog,setBlog] = useState(false);


  return (
    <div className='body' style={{ padding: "1rem" }}>
        {!blog &&  <Button variant="outline-success" onClick={setBlog.bind(this,true)} className='link' smooth={true} style={{textDecoration:"none"}} >Add Blog</Button>}
     
        {blog ? <Addblog/> :  <div style={{ marginTop: "1rem" }} className="blogs">
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
      </div>}
     
    </div>

  )
}

export default blog