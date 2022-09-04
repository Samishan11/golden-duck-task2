import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.css';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';
import axios from "axios";
import Blog from "./blog"
const Addblog = () => {
    const { quill, quillRef } = useQuill();
    const [description, setDescription] = useState();

    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');



    React.useEffect(() => {
        if (quill) {
            quill.on('text-change', () => {
                setDescription(quillRef.current.firstChild.innerHTML)
            });
        }
    }, [quill]);

    // add blog
    var fd = new FormData();
    fd.append("title", title)
    fd.append("description", description)
    fd.append("image", image)

    const addBlog = async () => {
        try {
            const res = await axios.post("http://localhost:8000/api/v4/blog/post", fd)
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <div style={{ padding: "1rem" }}>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Blog Title</Form.Label>
                    <Form.Control onChange={e => setTitle(e.target.value)} type="" placeholder="Enter blog title" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Blog Image</Form.Label>
                    <Form.Control onChange={e => setImage(e.target.files[0])} type="file" placeholder="" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Blog Description</Form.Label>
                    <div style={{ height: "10rem" }} ref={quillRef} />
                </Form.Group>
            </Form>
            <Button onClick={addBlog} variant="outline-primary">Add Blog</Button>
        </div>
    )
}
export default Addblog;