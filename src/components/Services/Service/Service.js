import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = (props) => {
  const { name, img, description, price, id } = props.serviceid;

  return (
    <>
      <div className="container">
        <Card className="single-card">
          <Card.Img variant="top" className="img-style App" src={img} />
          <Card.Body className="App">
            <Card.Title className="text-primary">{name}</Card.Title>
            <Card.Text>{description.slice(0, 30)}</Card.Text>
            <p>
              Price :<span className="text-warning fw-bold">{price}</span>
            </p>
            <Link to={`/book/${description}`}>
              <button className="btn btn-warning">
                Book {name.toLowerCase()}
              </button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Service;
