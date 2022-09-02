import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.css';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';


const Addblog = () => {
    const { quill, quillRef } = useQuill();
    const [value, setValue] = useState();

    React.useEffect(() => {
        if (quill) {
            quill.on('text-change', () => {
                console.log(quillRef.current.firstChild.innerHTML);
                setValue(quillRef.current.firstChild.innerHTML)
            });
        }
    }, [quill]);
    console.log(value)
    return (
        <div style={{ padding: "1rem" }}>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Blog Title</Form.Label>
                    <Form.Control type="email" placeholder="Enter blog title" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Blog Image</Form.Label>
                    <Form.Control type="file" placeholder="" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Blog Description</Form.Label>
                    <div style={{ height: "10rem" }} ref={quillRef} />
                </Form.Group>
            </Form>
            <Button variant="outline-primary">Add Blog</Button>
        </div>
    )
}
export default Addblog;