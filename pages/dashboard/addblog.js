import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.css';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';
import axios from "axios";
import FormData from "form-data";
import Blog from "./blog"
import { toast } from 'react-toastify';

const Addblog = () => {
    const { quill, quillRef } = useQuill();
    const [description, setDescription] = useState();
    const [title, setTitle] = useState('');
    const [catagory, setCatagory] = useState('');
    const [image, setImage] = useState('');
    const [redirect, setRedirect] = useState(false);



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
    fd.append("catagory", catagory)

    const addBlog = async () => {
        try {
            const res = await axios.post("https://golden-duck-it.herokuapp.com/api/v4/blog/post", fd)
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
            toast.success('Something went wrong', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
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
                                <Form.Control onChange={e => setTitle(e.target.value)} type="" placeholder="Enter blog title" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Blog Catagory</Form.Label>
                                <Form.Control onChange={e => setCatagory(e.target.value)} type="" placeholder="Enter blog catagory" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Blog Image</Form.Label>
                                <Form.Control onChange={e => setImage(e.target.files[0])} type="file" placeholder="" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Blog Description</Form.Label>
                                <pre> <div style={{ height: "10rem" }} ref={quillRef} /> </pre>
                            </Form.Group>
                        </Form>
                        <Button onClick={addBlog} variant="outline-primary">Add Blog</Button>
                    </div>
            }
        </>
    )
}
export default Addblog;