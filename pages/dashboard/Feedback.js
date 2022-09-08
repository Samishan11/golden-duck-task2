import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import {toast} from "react-toastify"

function feedback() {

  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [author, setAuthor] = useState();
  const [image, setImage] = useState();

  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);

  //for edit
  const [singleFeedback, setSingleFeedback] = useState({});
  const [singleFeedbackTitle, setSingleFeedbackTitle] = useState();
  const [singleFeedbackDescription, setSingleFeedbackDescription] = useState();
  const [singleFeedbackImage, setSingleFeedbackImage] = useState();
  const [singleFeedbackAuthor, setSingleFeedbackAuthor] = useState();
  const [singleFeedbackId, setSingleFeedbackId] = useState();

  //--------------------------------------------------------


  const [change, setChange] = useState(false)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const [action, setAction] = useState();
  const [feedbacks, setFeedbacks] = useState([]);

  const [showEdit, setEditShow] = useState(false);

  const handleEditShow = (i) => {
    setEditShow(true)

    console.log(feedbacks[i])
    setSingleFeedback(feedbacks[i]);
    setSingleFeedbackTitle(feedbacks[i].title)
    setSingleFeedbackDescription(feedbacks[i].description)
    setSingleFeedbackAuthor(feedbacks[i].author)
    setSingleFeedbackImage(feedbacks[i].image)
    setSingleFeedbackId(feedbacks[i]._id)


  }

  //------------------------------

  const handleEditClose = () => setEditShow(false)

  const getFeedback = async () => {
    const response = await axios.get('https://golden-duck-it.herokuapp.com/api/v4/feedback');
    console.log(response.data.feedbacks);
    setFeedbacks(response.data.feedbacks)
  }

  // add Feedback
  const addFeedback = async () => {
    let fd = new FormData();
    fd.append("title", title)
    fd.append("description", description)
    fd.append("author", author)
    fd.append("image", image)
    handleClose()
    try {
      const res = await axios.post("https://golden-duck-it.herokuapp.com/api/v4/postFeedback", fd)
      if (res.data.success) {
        toast.success('Feedback deleted sucessfully', {
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
        });
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

  // edit Feedback
  const editFeedback = async () => {
    const editFormData = new FormData();
    editFormData.append('feedBackId', singleFeedbackId)
    editFormData.append('title', singleFeedbackTitle);
    editFormData.append('description', singleFeedbackDescription);
    editFormData.append('author', singleFeedbackAuthor);
    editFormData.append('image', singleFeedbackImage);
    handleEditClose()
    try {
      const res = await axios.put(`https://golden-duck-it.herokuapp.com/api/v4/editFeedback`, editFormData)
      if (res.data.success) {
        toast.success('Feedback edit sucessfully', {
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
        });
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



  //  delete Feedback
  const deleteFeedback = async (i) => {
    try {
      const res = await axios.delete(`https://golden-duck-it.herokuapp.com/api/v4/deleteFeedback/${feedbacks[i]._id}`)
      if (res.data.success) {
        toast.success('Feedback deleted sucessfully', {
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
        });
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

  useEffect(() => {
    getFeedback()
  }, [change])

  return (
    <div className='body' style={{ padding: "1rem", width: "100%" }}>
      <Button onClick={handleShow} variant="outline-success" className='link' smooth={true} style={{ textDecoration: "none" }} >Add Feedback</Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Feedback Title</Form.Label>
              <Form.Control onChange={e => setTitle(e.target.value)} type="" placeholder="Enter Feedback title" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Author</Form.Label>
              <Form.Control onChange={e => setAuthor(e.target.value)} type="" placeholder="Enter Author Name " />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Feedback Description</Form.Label>
              <Form.Control onChange={e => setDescription(e.target.value)} type="" placeholder="Enter Description" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Feedback Image</Form.Label>
              <Form.Control onChange={e => setImage(e.target.files[0])} type="file" placeholder="" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={addFeedback} variant="primary">Add Feedback</Button>
        </Modal.Footer>
      </Modal>
      <div className="blogs" style={{ marginTop: "1rem" }}>
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
            {feedbacks.map((feedback, index) => {
              return (
                <tr><td>{index + 1}</td>

                  <td>{feedback.title}</td>
                  <td>{feedback.description?.slice(0,10)+"......"}</td>
                  <td>{feedback.author}</td>
                  <td>2020 : 12: 01</td>
                  <td> <Button variant="outline-success" onClick={handleEditShow.bind(this, index)} >Edit</Button>
                    <Button style={{marginLeft:"5px"}} variant="outline-danger" onClick={deleteFeedback.bind(this, index)}>Delete</Button></td>
                </tr>

              )
            })}

          </tbody>
        </Table>
        <Modal
          show={showEdit}
          onHide={handleEditClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Feedback Title</Form.Label>
                <Form.Control value={singleFeedbackTitle} onChange={e => setSingleFeedbackTitle(e.target.value)} type="" placeholder="Enter Feedback title" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Author</Form.Label>
                <Form.Control value={singleFeedbackAuthor} onChange={e => setSingleFeedbackAuthor(e.target.value)} type="" placeholder="Enter Feedback Author" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Feedback Description</Form.Label>
                <Form.Control value={singleFeedbackDescription} onChange={e => setSingleFeedbackDescription(e.target.value)} type="" placeholder="Enter Feedback catagory" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Feedback Image</Form.Label>
                <Form.Control onChange={(e) => setSingleFeedbackImage(e.target.files[0])} type="file" placeholder="" />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleEditClose}>
              Close
            </Button>
            <Button onClick={editFeedback} variant="primary">Update Feedback</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>

  )
}

export default feedback