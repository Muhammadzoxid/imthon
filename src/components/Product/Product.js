import React, { useEffect, useState } from "react";
import "./Product.css";
import axios from "axios";
import { Link } from "react-router-dom";

export const API_URL = "https://dummyjson.com/users";

function Product() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => setData(res.data.users))
      .catch((err) => console.log(err));
  }, []);

  console.log(data);

  return (
    <div className="product">
      <div className="product-container container">
        <div className="product-card_wrapper">
          {data.map((value, index) => {
            return (
              <div key={value.id} className="product-card">
                <Link to={`/product/${value.id}`}>
                  <img src={value.image} alt="" />
                </Link>
                <div className="product-card-info-bottom">
                  <p className="product-card-info-title">
                    First Name::<strong>{value.firstName}</strong>
                  </p>
                  <p className="product-card-info-title">
                    Last Name::{value.lastName}
                  </p>
                  <p className="product-card-info-title">Age::{value.age}</p>
                  <p className="product-card-info-title">
                    Maiden Name<strong></strong>::{value.maidenName}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Product;
