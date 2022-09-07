import React, { useState } from "react";
import Style from "../../public/static/contactForm.module.css";
import axios from "axios";
function ContactForm() {

  const [name, setName] = useState();
  const [contact, setContact] = useState();
  const [email, setEmail] = useState();
  const [service, setService] = useState();
  const [found, setFound] = useState();
  const [message, setMessage] = useState();
  const [change, setChange] = useState(true);

  const submit = async(e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://golden-duck-it.herokuapp.com/api/v4/contactPost', {
        name,
        contact,
        email,
        service,
        found,
        message
      })
      console.log(response)
    } catch (err) {
      console.log(err.message)
    }

    setChange(!change)

  }
  return (
    <div className={Style.mainContainer}>

      {change ? <div className={Style.container}>
        <h4>Fill out the form and we'll be in touch as soon as possible.</h4>
        <div className={Style.subContainer}>
          <form name="form" className={Style.formContainer}>
            <div className={Style.heading}>
              <input type="string" placeholder="Name" value={name} name="name" onChange={(e) => setName(e.target.value)}></input>
              <input type="string" placeholder="Contact Number" value={contact} name="contactNumber" onChange={(e) => setContact(e.target.value)}></input>

            </div>

            <div className={Style.formBody}>
              <input type="string" placeholder="Email Address" className={Style.formEmail} value={email} onChange={(e) => setEmail(e.target.value)}></input>
              <div className={Style.choice} >
                <select id="cars" name="cars" onChange={(e) => setService(e.target.value)}>
                  <option >Select Our Services</option>
                  <option value="Web Design">Web Design</option>
                  <option value="Socail Media Marketing">Social Media Marketing</option>
                  <option value="Search Engine Optimization">Search Engine Optimization</option>
                  <option value="Web Application">Web Application</option>
                  <option value="App Development">App development</option>

                </select>
                <select id="cars" name="cars" onChange={(e) => setFound(e.target.value)}>
                  <option >How did you find about us?</option>
                  <option value="Social Media">Social Media</option>
                  <option value="A friend">A friend</option>
                  <option value="Other platform">Other platform</option>
                </select>
              </div>

              <textarea placeholder="Message" className={Style.formTextArea} value={message} onChange={(e) => { setMessage(e.target.value) }}></textarea>
            </div>
            <button className={Style.formButton} onClick={submit}>Get Started</button>
          </form>
        </div>
      </div> : <div className={Style.text}><div>Thank You For Submitting! </div></div>}
    </div>

  );
}

export default ContactForm;
