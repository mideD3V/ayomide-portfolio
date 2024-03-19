import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    alert('SUCCESS!');
    emailjs
      .sendForm(
        "service_4gv6ola",
        "template_futfc6n",
        form.current,
        "1lOL10nl91Hv2TJfK"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Successful!" );
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name:</label>
      <input
        type="text"
        name="user_name"
        id="name"
        placeholder="Please enter your full name"
        onChange={(e) => setName(e.target.value)}
      />
      <label>Email:</label>
      <input
        type="email"
        name="user_email"
        id="email"
        placeholder="Please enter your email address"
        onChange={(e) => setEmail(e.target.value)}
      />
      <label>Message:</label>
      <textarea
        name="message"
        id="message"
        cols="30"
        rows="10"
        placeholder="Enter your message here"
      />
      <input type="submit" value="Send" id="send-btn" />
    </form>
  );
};
