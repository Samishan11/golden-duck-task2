import React from 'react'
import Style from "../../public/static/adminblog.module.css";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import { useState } from "react"
import Link from "next/link"
import Addblog from './addblog';
import axios from "axios";

function blog() {

  const [blog, setBlog] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [change, setChange] = useState(false)

  // get blogs
  React.useEffect(() => {
    const getBlogs = async () => {
      try {
        const res = await axios.get("https://golden-duck-it.herokuapp.com/api/v4/blog")
        setBlogs(res.data.data)

      } catch (error) {
        console.log(error)
      }
    }
    getBlogs()
  }, [change])

  // delete blog
  const deleteBlog = async (id) => {
    try {
      const res = await axios.delete(`https://golden-duck-it.herokuapp.com/api/v4/blog/delete/${id}`)
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
      {!blog && <Button variant="outline-success" onClick={setBlog.bind(this, true)} className='link' smooth={true} style={{ textDecoration: "none" }} >Add Blog</Button>}

      {blog ? <Addblog /> : <div style={{ marginTop: "1rem" }} className="blogs">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Blog Title</th>
              <th>Aurthor</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              blogs.map((data, ind) => {
                return (
                  <tr>
                    <td>{ind+1}</td>
                    <td>{data.title}</td>
                    <td>Admin</td>
                    <td>{data.date}</td>
                    <td> <Button variant="outline-success">Edit</Button>  <Button onClick={deleteBlog.bind(this,data._id)} variant="outline-danger">Delete</Button></td>
                  </tr>
                )
              })
            }

          </tbody>
        </Table>
      </div>}

    </div>

  )
}

export default blog