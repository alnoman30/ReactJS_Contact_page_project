import React, { useState } from 'react';
import { MdOutlineMessage } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { IoMailUnreadOutline } from "react-icons/io5";
import { FaTimes } from "react-icons/fa";
import Button from '../Buttons/Button';
import style from "./contact.module.css";

const FeedbackDialog = ({ feedback, onClose }) => {
  return (
    <div className={style.dialog}>
      <div className={style.dialog_content}>
        <button className={style.close_btn} onClick={onClose}>
          <FaTimes />
        </button>
        <h3>Submitted Feedback</h3>
        <p><strong>Name:</strong> {feedback.name}</p>
        <p><strong>Email:</strong> {feedback.email}</p>
        <p><strong>Message:</strong> {feedback.message}</p>
      </div>
    </div>
  );
};

const Contact = () => {
  const [feedback, setFeedback] = useState({ name: "", email: "", message: "" });
  const [submittedFeedback, setSubmittedFeedback] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { name, email, message } = feedback;

  const handleChange = (event) => {
    setFeedback({ ...feedback, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedFeedback(feedback);
    setIsDialogOpen(true);
    setFeedback({ name: "", email: "", message: "" });
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <section className={style.container}>
      <div className={style.contact_form}>
        <div className={style.top_btn}>
          <Button text="VIA SUPPORT CHAT" icon={<MdOutlineMessage />} />
          <Button text="VIA CALL" icon={<IoCallSharp  />} />
        </div>
        <Button isOutline={true} text="VIA EMAIL FORM" icon={<IoMailUnreadOutline fontSize={"24px"} />} />

        <form onSubmit={handleSubmit}>
        
          <div className={style.control_field}>
            <label htmlFor="name">Name</label>
            <input type="text" name='name' id='name' onChange={handleChange} value={name} />
          </div>
          <div className={style.control_field}>
            <label htmlFor="email">E-Mail</label>
            <input type="text" name='email' id='email' onChange={handleChange} value={email} />
          </div>
          <div className={style.control_field}>
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" onChange={handleChange} value={message}></textarea>
          </div>
          <div className={style.submit_btn}>
            <Button type="submit" text="SUBMIT" />
          </div>
          {isDialogOpen && <FeedbackDialog feedback={submittedFeedback} onClose={handleCloseDialog} />}
        </form>

       
      </div>

      <div className={style.contact_image}>
        <img src="./images/Service 24_7-pana 1.svg" alt="contact image" />
      </div>
    </section>
  );
}

export default Contact;
