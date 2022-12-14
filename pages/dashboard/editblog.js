import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.css';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';
import axios from "axios";
import FormData from "form-data";
import Blog from "./blog";
import {toast} from "react-toastify";

const Editblog = ({ data }) => {
    const { quill, quillRef } = useQuill();
    const [title, setTitle] = useState(data.title);
    const [catagory, setCatagory] = useState(data.catagory);
    const [description, setDescription] = useState(data.description);
    const [image, setImage] = useState('');

    const [redirect, setRedirect] = useState(false);

    React.useEffect(() => {
        if (quill) {
            quill.on('text-change', () => {
                setDescription(quillRef.current.firstChild.innerHTML)
            });
            setDescription(quillRef.current.firstChild.innerHTML = data.description)
        }
    }, [quill]);

    // add blog
    var fd = new FormData();
    fd.append("title", title)
    fd.append("catagory", catagory)
    fd.append("id", data._id)
    fd.append("description", description)
    fd.append("image", image)

    const EditBlog = async () => {
        try {
            const res = await axios.put(`http://golden-duck-it.herokuapp.com/api/v4/blogUpdate`, fd)
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
            }else{
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
            setRedirect(true)
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <>
            {
                redirect ? <Blog /> :
                    <div style={{ padding: "1rem" }}>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Blog Title</Form.Label>
                                <Form.Control value={title} onChange={e => setTitle(e.target.value)} type="" placeholder="Enter blog title" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Blog Title</Form.Label>
                                <Form.Control value={catagory} onChange={e => setCatagory(e.target.value)} type="" placeholder="Enter blog catagory" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Blog Image</Form.Label>
                                <Form.Control onChange={e => setImage(e.target.files[0])} type="file" placeholder="" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Blog Description</Form.Label>
                                <pre> <div id="textarea" style={{ height: "10rem" }} ref={quillRef} /> </pre>
                            </Form.Group>
                        </Form>
                        <Button onClick={EditBlog} variant="outline-primary">Edit Blog</Button>
                    </div>
            }
        </>
    )
}
export default Editblog;