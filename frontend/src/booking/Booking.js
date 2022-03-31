import React, { useState, useEffect } from "react";
import "./Booking.css";

const Booking = () => {
  const [services, setServices] = useState([]);
  const [filteredServices, setFilteredServices] = useState("");
  // const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch("/listed.json");
      const data = await res.json();
      setServices((prevProducts) => data);
    };
    getProducts();
  }, []);

  // console.log(services);

  return (
    <div className="main-booking">
      <input
        type="text"
        name="search"
        value={filteredServices}
        onChange={(e) => setFilteredServices(e.target.value)}
        placeholder="search for services"
      />

      <ul style={{ listStyle: "none" }}>
        {services
          .filter((service) =>
            service.service.match(new RegExp(filteredServices, "i"))
          )
          .map((service, i) => {
            return (
              <li key={i} className="card">
                <div className="c-title">
                  <h6>{service.service}</h6>
                  <p>{service.shop}</p>
                  <p>{service.days}</p>
                  <p>{service.time}</p>
                </div>
                <div>
                  <p>{service.price}</p>
                  <button id="btn">Book</button>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Booking;
