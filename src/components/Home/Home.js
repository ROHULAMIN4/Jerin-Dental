import React from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/f1FZk09/Teeneger-girl-during-inspection-of-oral-cavity-with-help-of-hook-and-mirror.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/6Z33rqG/Dentist-making-professional-teeth-cleaning-withb-the-cotton-female-young-patient-at-the-dental-offic.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/Nypxw39/Young-female-patient-visiting-dentist-office-Beautiful-woman-with-healthy-straight-white-teeth-sitti.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <h4 className="text-center text-success mt-5">
        Permanent teeth are the teeth you use for your entire life. <br />{" "}
        Please take good care of your teeth by understanding their roles.
      </h4>
      <div className="row m-5 p-4 App grid-card">
        <div className="col-lg-4 col-md-6 col-sm-12  single-clm">
          <h3>Medical report helth your teeth and Mouth</h3>
          <h6>
            In order to maintain dental and oral health, let’s examine the
            features of teeth that differ by age group and the precautions for
            each group, in order to prevent caries, periodontal disease, and
            other oral problems.
          </h6>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12  single-clm">
          <h3> care and age grop :fatal stay</h3>
          <h6>
            The formation of permanent teeth begins during the fetal stage, and
            they develop in the jaw over a long period of time. All milk teeth
            emerge between 8 months to 3 years of age.
          </h6>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12  single-clm">
          <h3>Care and age :puberty and authhood</h3>
          <h6>
            From puberty to adulthood, the risk of not only caries but
            periodontal disease (gingivitis, periodontitis) that increases with
            changes in the living environment. It is recommended that the habit
            of checking the gums be acquired, so as to maintain healthy teeth
            and gums.
          </h6>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 single-clm">
          <h3>Caries Check</h3>
          <h6>
            As a person grows older, their gums become thinner and more teeth
            will be lost, although there are individual differences. Locations
            such as the roots of the teeth or under dental prostheses become
            vulnerable to caries or periodontal disease
          </h6>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 single-clm">
          <h3>Gym check</h3>
          <h6>
            It is important to visually check the condition of your gums. Check
            your gums using a hand mirror.
          </h6>
        </div>
      </div>
      <div className="App d-block backgroundServices p-5">
        <h1
          className="text-warning
        fs-2"
        >
          Our serveives
        </h1>
        <p>Rote canel</p>
        <p>Rote canel</p>
        <p>Sedation Dentistry</p>
        <p>Gum Disease Therapy</p>
        <Link to="/services">
          <button className="btn btn-warning mt-4"> More Service</button>
        </Link>
      </div>
      <div className="row ms-5 mt-5">
        <div className="col-lg-5 col-sm-10 single-info">
          <h1 className="text-info">Doctor List </h1>
          <p>Jhin Slem</p>
          <p>Olina Roy</p>
          <p>Stem jon</p>
          <p>Alexa Sinha</p>
          <Link to="/team">
            <button className="btn btn-warning">More inforamtion</button>
          </Link>
        </div>
        <div className="col-lg-5 col-sm-10 single-info">
          <h1 className="text-info">Expricend and certificate</h1>
          <p>Progress </p>
          <p>Profession</p>
          <Link to="/contactus">
            <button className=" btn btn-warning mt-5">More Information</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
