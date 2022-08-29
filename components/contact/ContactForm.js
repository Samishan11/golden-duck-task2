import React from "react";
import Style from "../../public/static/contactForm.module.css";

function ContactForm() {

    const submit = () =>{
        console.log('submitted');
    }
  return (
    <div className={Style.container}>
      <h4>Fill out the form and we'll be in touch as soon as possible.</h4>
      <div className={Style.subContainer}>
        <form method="POST" type='submit' name="form" className={Style.formContainer}>
            <div className={Style.heading}>
                <input type="string" placeholder="Name" name="name"></input>
                <input type="string" placeholder="Contact Number" name="contactNumber"></input>

            </div>

            <div className={Style.formBody}>
            <input type="string" placeholder="Email Address" className={Style.formEmail}></input>
            <textarea  placeholder="Message" className={Style.formTextArea}></textarea>
            </div>
            <button className={Style.formButton} onSubmit={submit}>Get Started</button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
