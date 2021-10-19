import React, { useEffect, useState } from "react";
import Service from "./Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("service.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <h1 className="text-center text-primary mt-5">Our services</h1>
      <div className="card-style">
        {services.map((service) => (
          <Service key={service.id} serviceid={service}></Service>
        ))}{" "}
      </div>
    </div>
  );
};

export default Services;
