import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.css';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';
import axios from "axios";
import FormData from "form-data";
const Editblog = ({ data }) => {
    const { quill, quillRef } = useQuill();
    const [description, setDescription] = useState(data.description);

    const [title, setTitle] = useState(data.title);
    const [image, setImage] = useState('');

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
    fd.append("id", data._id)
    fd.append("description", description)
    fd.append("image", image)

    const EditBlog = async () => {
        try {
            const res = await axios.put(`http://golden-duck-it.herokuapp.com/api/v4/blogUpdate`, fd)
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
                    <Form.Control value={title} onChange={e => setTitle(e.target.value)} type="" placeholder="Enter blog title" />
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
    )
}
export default Editblog;