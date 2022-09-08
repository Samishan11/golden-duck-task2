import React from 'react'
import Style from "../../public/static/adminblog.module.css";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import { useState } from "react"
import Addblog from './addblog';
import axios from "axios";
import Editblog from './editblog';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function blog() {

  const [blog, setBlog] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [singleblogs, setSingleBlogs] = useState([]);
  const [showeditblog, setShotBlog] = useState(false);
  const [change, setChange] = useState(false)

  const redirectToEdit = (i) => {
    setSingleBlogs(blogs[i]);
    setShotBlog(true)
  }

  // get blogs
  React.useEffect(() => {
    const getBlogs = async () => {
      try {
        const res = await axios.get("https://golden-duck-it.herokuapp.com/api/v4/blog")
        setBlogs(res.data.data)
        console.log(res.data.data)


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
      if (res.data.success) {
        toast.success('Blog deleted sucessfully', {
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
        })
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
    <>
      {
        showeditblog ? <Editblog data={singleblogs} /> :
          <div className='body' style={{ padding: "1rem", width: "100%" }}>
            {!blog && <Button variant="outline-success" onClick={setBlog.bind(this, true)} className='link' smooth={true} style={{ textDecoration: "none" }} >Add Blog</Button>}

            {blog ? <Addblog /> : <div style={{ marginTop: "1rem" }} className="blogs">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Blog Title</th>
                    <th>Blog Catagory</th>
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
                          <td>{ind + 1}</td>
                          <td>{data.title}</td>
                          <td>{data.catagory}</td>
                          <td>Admin</td>
                          <td>{data.date}</td>
                          {/* <td>{parse(data.description)}</td> */}
                          <td> <Button onClick={redirectToEdit.bind(this, ind)} variant="outline-success">Edit</Button>  <Button onClick={deleteBlog.bind(this, data._id)} variant="outline-danger">Delete</Button></td>
                        </tr>
                      )
                    })
                  }

                </tbody>
              </Table>
            </div>}

          </div>
      }
    </>


  )
}

export default blog