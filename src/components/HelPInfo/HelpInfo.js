import React from "react";
import "./Helping.css";

const HelpInfo = () => {
  return (
    <div className="container">
      <h2 className="text-center text-info mb-3 ">NEW PATIENT INFORMATION</h2>
      <p className="text-muted mb-5">
        Serene dental family is currently accepting new patients. We know that
        going to the dentist is intimidating to many and we want to make sure
        that your first visit is comfortable. We can walk you through the
        process of what to expect at your first visit. When you schedule your
        appointment our front desk staff can provide you with the information of
        that we need from you.
      </p>
      <div className="help">
        <div>
          <h2 className="text-center text-info mb-3 ">BEFORE THE VISIT</h2>
          <p className="text-muted mb-5">
            To help us ensure that your first visit is a smooth process we
            recommend that you complete the health history information 48 hrs in
            advance and provide us with the insurance information if you have
            any. You can do so by Rohul
          </p>
          <p className="text-muted mb-5">
            Our typical new patient appointment last anywhere between 60-90
            minutes.
          </p>
          <p className="text-muted mb-5">
            Please let us know if you need any special accommodations for your
            visit.
          </p>
          <p className="text-muted mb-5">
            Please feel free to let our front desk team know if you have any
            questions or concerns about your visit. If you have any specific
            concerns and need to speak to the Doctor in advance about them then
            Dr. Karri will be happy to talk to you over the phone before your
            visit.
          </p>
          <p className="text-muted mb-5">
            Make sure to bring your list of medications to your visit.
          </p>
          <p className="text-muted mb-5">
            If you are pregnant or using blood thinners or have health
            conditions that may require premeds before your appointment(like
            history of infective endocarditis, artificial heart valves,
            artificial joints, severely immunocompromised etc. ) let us know in
            advance, so that we may request clearance from your physician if
            needed
          </p>
          <p className="text-muted mb-5">
            If you do not have dental insurance you do not have to worry, we can
            still see you.
          </p>
          <p className="text-muted mb-5">
            We can also provide you with other options like Inhouse membership
            plans or care credit to make the treatment more affordable to you.
          </p>
          <p className="text-muted mb-5">
            If you have already filled your new patient forms online then please
            be here atleast 10 mins prior to your appointment. If you haven’t
            filled your forms online then please be here atleast 20minutes in
            advance and make sure you have all the necessary information so that
            you have enough time to fill the necessary forms.
          </p>
        </div>
        <div>
          <p>
            <img
              src="https://image.freepik.com/free-photo/heal-specialist-procedure-cure-patient_1301-3116.jpg"
              alt=""
            />
          </p>
          <p>
            <img
              src="https://image.freepik.com/free-photo/female-patient-looking-mirror-dentist-s-office_23-2148985778.jpg"
              alt=""
            />
          </p>
          <p>
            <img
              src="https://image.freepik.com/free-photo/young-female-patient-having-dental-procedure-orthodontist_23-2148985752.jpg"
              alt=""
            />
          </p>
        </div>
      </div>
      <h1 className="text-info text-center m-5">During the visit</h1>
      <div className="help">
        <div>
          <p>
            <img
              src="https://image.freepik.com/free-photo/filling-medical-history_1098-16827.jpg"
              alt=""
            />
          </p>
          <p>
            <img
              src="https://image.freepik.com/free-vector/woman-booking-appointment-calendar_23-2148562875.jpg"
              alt=""
            />
          </p>
        </div>
        <div>
          <p className="text-muted mb-5">
            As soon as you are in the office, you will be greeted by one of our
            team member at the front desk and she will hand you the necessary
            forms.
          </p>
          <p className="text-muted mb-5">
            For the comfort of our patients we have water, coffee and magazines
            in our waiting area. Please help yourself and we also offer blankets
            and pillows in our treatment rooms, so please let us know if you
            need any and we can provide them for you.
          </p>
          <p className="text-muted mb-5">
            After the forms are completed one of our hygienist will take you to
            one of our hygiene rooms and she will once again ask you your main
            concerns and then get the necessary X-rays, take readings of your
            gum pockets and also pictures of your teeth so that you can also see
            what we see in your mouth.
          </p>
          <p className="text-muted mb-5">
            After this, Dr. Karri will come and check your teeth and based on
            your concerns, clinical examination, x-rays and gum readings will
            provide her recommendations and come up with a custom treatment plan
            that fits your needs.
          </p>
          <p className="text-muted mb-5">
            If they determine you need a healthy cleaning then we can take care
            of it the same day for you. But if you need a more intensive
            cleaning then we can either take care of it the same day or
            reschedule for another day depending on your convenience and our
            availability.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HelpInfo;
