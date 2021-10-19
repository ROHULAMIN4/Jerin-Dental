import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="App main-footer mt-5 ">
      <div className=" row footer-style">
        <div className="col-lg-6 col-sm-12">
          <h3 className="text-secondary m-5">Dental hospital</h3>
          <p>
            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
            Vestibulum ac diam sit amet quam vehicula elementum sed sit
          </p>
          <p>
            <i class="fas fa-phone"></i>
            emmergency Services
          </p>
          <p>
            <i class="fas fa-map-marker-alt"></i> Doher Dhaka 1,rode 1330
          </p>
          <p>
            <i class="fas fa-envelope"></i>
            rohulamin131650@yahoo.com
          </p>
        </div>
        <div className="col-lg-6 col-sm-12">
          <h3 className="text-secondary m-5">Opening Hours</h3>
          <p className="text-muted">Monday 09:00 - 19:00 </p>
          <p>Tuesday 09:00 - 19:00 </p>
          <p>Wedneday 09:00 - 19:00 </p>
          <p>Thursday 09:00 - 19:00 </p>
          <p>Friday 09:00 - 19:00 </p>
          <p>Saturday 10:00 - 18:00 </p>
          <p>Saturday 10:00 - 17:00 </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
