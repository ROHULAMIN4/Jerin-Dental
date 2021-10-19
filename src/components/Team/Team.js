import React from "react";
import { Card } from "react-bootstrap";
import "./Team.css";

const Team = ({ team }) => {
  const { name, img } = team;
  return (
    <div className="container mt-4">
      <Card className=" teamContainer" style={{ width: "18rem" }}>
        <Card.Img className="teamImages" variant="top" src={img} />

        <Card.Body>
          <Card.Title>
            <h2 className="text-primary">{name}</h2>
          </Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Team;
