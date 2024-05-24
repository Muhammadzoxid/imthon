import React from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../../components/Product/Product";
import "./SingleRoute.css";
import { useState, useEffect } from "react";
import axios from "axios";

function SingleRoute() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => setData(res.data.users))
      .catch((err) => console.log(err));
  }, []);

  const params = useParams();
  console.log(params);
  const item = data.find((el) => el.id == params.id);
  if (!item) {
    return <h1>salom</h1>;
  }

  return (
    <div className="single">
      <div className="single-container container">
        <div className="single-img-card">
          <img className="single-img" src={item.image} alt="" />
        </div>
        <div className="single-product-info">
          <div className="single-product-info-card">
            <p>
              <strong>FirstName</strong>:{item.firstName}
            </p>
            <p>
              <strong>LastName</strong>:{item.lastName}
            </p>
            <p>
              <strong>UserName</strong>:{item.username}
            </p>
            <p>
              <strong>Age</strong>:{item.age}
            </p>
            <p>
              <strong>BirthDate</strong>:{item.birthDate}
            </p>
            <p>
              <strong>Email</strong>:{item.email}
            </p>
            <p>
              <strong>Gender</strong>:{item.gender}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleRoute;
