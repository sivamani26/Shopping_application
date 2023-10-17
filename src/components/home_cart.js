import React, { useState, useEffect } from "react";
import axios from "axios";
import "./home_cart.css";

const Body_cart = () => {
  const [showApi, setShowApi] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setShowApi(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="data_container">
      <div className="card_container">
        {showApi.map((showdata) => (
          <div className="data_div" key={showdata.id}>
            <div className="data_card">
              <div
                className={`achievement-label ${
                  showdata.category === "women's clothing" ? "left-tag" : ""
                } ${showdata.category === "jewelery" ? "jewelery_card" : ""}  ${
                  showdata.category === "men's clothing" ? "men_card" : ""
                }`}
              >
                {showdata.category}
              </div>
              <img src={showdata.image} alt={showdata.title} />
              <div className="card_title">
                <h5>{showdata.title}</h5>
              </div>
              <div className="card_price">${showdata.price}</div>
              <div className="card_description">{showdata.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Body_cart;
