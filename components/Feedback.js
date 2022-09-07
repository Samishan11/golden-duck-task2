import React, { useState, useEffect } from 'react';
import Style from "../public/static/feedback.module.css";
import { Link } from "react-scroll";
import axios from 'axios';

function Feedback() {

  const [feedbacks, setFeedbacks] = useState([]);
  const getFeedback = async () => {
    try {
      const response = await axios.get('https://golden-duck-it.herokuapp.com/api/v4/feedback');
      setFeedbacks(response.data.feedbacks)
    }
    catch (err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    getFeedback();
  }, []);


  return (
    <div className={Style.container}>
      <div>
        <p>USER FEEDBACK</p>
        <h2>What Our Customer Say About Us</h2>
      </div>
      <div className={Style.feedbackContainer}>
        {/*  */}
        {feedbacks.map(feedback => {
          return (
            <div className={Style.feedback}>
              <div className={Style.feedbackImage}>
                <img className="Image" src={`https://golden-duck-it.herokuapp.com/${feedback.image}`} />
                <h2>{feedback.author}</h2>
                <h4>{feedback.title}</h4>
                <p>
                  {feedback.description}
                </p>
              </div>
            </div>
          )

        })}

        {/*  */}
      </div>
    </div>
  );
}

export default Feedback;
