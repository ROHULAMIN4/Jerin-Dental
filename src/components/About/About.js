import React from "react";
import { Carousel, ProgressBar } from "react-bootstrap";
import "./About.css";

const About = () => {
  return (
    <div>
      <div className="mb-4">
        <Carousel>
          <Carousel.Item>
            <img
              className=" d-block w-100"
              src="https://i.ibb.co/BGGbHC8/young-female-doctor-posing-corridor-hospital.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Oxford Expert Dentist</h3>
              <small>
                Dentistry usually encompasses practices related to the oral
                cavity. According to the World Health Organization, oral
                diseases are major public health problems due to their high
                incidence and prevalence across the globe, with the
                disadvantaged affected more than other socio-economic groups.
              </small>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.ibb.co/PNxMq5F/african-woman-biochemist-researcher-checking-manifestations-vaccine-working-modern-equipped-laborato.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>The Of Dhaka Medical College</h3>
              <p>
                All dentists in the United States undergo at least three years
                of undergraduate studies, but nearly all complete a bachelor's
                degree. This schooling is followed by four years of dental
                school to qualify as a "Doctor of Dental Surgery or "Doctor of
                Dental Medicine . Specialization in dentistry is available in
                the fields of Anesthesiology,.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.ibb.co/crDKgxt/team-young-specialist-doctors-standing-corridor-hospital.jpg"
            />

            <Carousel.Caption>
              <h3>Madraz Dentist Team</h3>
              <p>
                Studies show that dentists that graduated from different
                countries or even from different dental schools in one countr
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="App">
        <div className="appid">
          <h3 className="text-success">
            Professional Doctors​ With <br /> 20+ Years Of Experience
          </h3>
          <p className="mt-4 shadow-lg p-4 rounded">
            The dental assistant's role is often thought to be to support the
            dental operator by typically passing instruments during clinical
            procedures. However, in fact,{" "}
          </p>
          <button className="btn btn-warning mt-5">Learn More</button>{" "}
        </div>
      </div>
      <h4 className=" text-center text-success mt-5">Who we Are</h4>
      <h1 className=" text-center text-secondary mt-4">
        Our Doctor Specialist & Experience
      </h1>
      <div className="d-flex shadow-lg">
        <div className="m-4 w-50">
          <span className="mt-5 text-success">Primary care progress</span>
          <ProgressBar variant="success" now={40} />
          <span className="mt-5 text-info">Information Improvement</span>
          <ProgressBar variant="info" now={20} />
          <span className="mt-5 text-warning">Mobile Care</span>
          <ProgressBar variant="warning" now={60} />
          <span className="mt-5 text-danger">Home Care</span>
          <ProgressBar variant="danger" now={80} />
        </div>
        <ul>
          <li className="text-success fs-3 mt-4">2017</li>
          <li className="text-info fs-3">2018</li>
          <li className="text-warning fs-3">2017</li>
          <li className="text-danger fs-3">2017</li>
        </ul>
      </div>
      <div className=" mt-5 mb-5 grid-exprience">
        <div className=" expricence">
          <h1>10</h1>
          <p>Year Experience</p>
        </div>
        <div className="expricence">
          <h1>22</h1>
          <p>Doctor Specialist</p>
        </div>
        <div className="expricence">
          <h1>30</h1>
          <p>Award Winner</p>
        </div>
        <div className="expricence">
          <h1>99</h1>
          <p>Satisfied Patient</p>
        </div>
      </div>
    </div>
  );
};

export default About;
