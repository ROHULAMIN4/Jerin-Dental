import React, { useState } from "react";
import "./Contact.css";

const ContactUs = () => {
  return (
    <div className="App">
      <h4>Contact</h4>
      <h2 className="text-info">Get In Touch With Us</h2>
      <div className="contactDisplay App">
        <div>
          <img src="https://i.ibb.co/d6CdyG6/doctor.jpg" alt="" />
        </div>
        <div className="shadow-lg">
          <input
            className="w-50"
            type="text"
            name=""
            placeholder="Your name"
            id=""
          />
          <input
            className="w-50"
            type="email"
            name=""
            placeholder=" Enter Your Email"
            id=""
          />
          <p></p>
          <input
            className="w-50"
            type="text"
            name=""
            placeholder=" Phone Number"
            id=""
          />
          <input
            className="w-50"
            type="text"
            name=""
            placeholder="Subject"
            id=""
          />
          <p></p>
          <textarea
            className="w-50 p-3"
            name=""
            id=""
            placeholder="Your Problem"
          ></textarea>
          <p></p>
          <button className="btn btn-warning mb-5">Submit</button>
        </div>
      </div>
      <div className="contact-style App">
        <div className="mt-5 anotherContact">
          <p>
            <i class="fas fa-briefcase"></i>;
          </p>
          <p className="text-info fs-4">Main office address</p>
          <small className="text-muted">
            Doher Dhaka united states of Bangladesh
          </small>
        </div>
        <div className="mt-5 anotherContact">
          <p>
            <i class="fas fa-phone"></i>;
          </p>
          <p className="text-info fs-4">Phone Number</p>
          <small className="text-muted">
            don`t call 6:am to 9:am +88018855***
          </small>
        </div>
        <div className="mt-5 anotherContact">
          <p>
            <i class="fab fa-facebook"></i>;
          </p>
          <p className="text-info fs-4">Facebook</p>
          <small className="text-muted">My id:Md Rohul Amin</small>
        </div>
        <div className="mt-5 anotherContact">
          <p>
            <i class="fas fa-envelope"></i>;
          </p>
          <p className="text-info fs-4">Email</p>
          <small className="text-muted">rohulamin1316502gmail.com</small>
        </div>
        <div className="mt-5 anotherContact">
          <p>
            <i class="fab fa-google-plus"></i>;
          </p>
          <p className="text-info fs-4">Google</p>
          <small className="text-muted">rohulamin1316502gmail.com</small>
        </div>
        <div className="mt-5 anotherContact">
          <p>
            <i class="fab fa-phoenix-framework"></i>;
          </p>
          <p className="text-info fs-4">Another</p>
          <small className="text-muted">Try to another for contact</small>
        </div>
      </div>
    </div>
  );
};

<i class="fab fa-facebook"></i>;

export default ContactUs;
