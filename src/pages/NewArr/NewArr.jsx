import React, { useEffect, useState } from "react";
import "./NewArr.scss";
import { useParams } from "react-router-dom";
import axios from "axios";

const NewArr = () => {
  const { type } = useParams();
  const [newArrData, setNewArrData] = useState([]);

  useEffect(() => {
    fetchNewArrData();
  }, [type]);

  const fetchNewArrData = async () => {
    const response = await axios.get(
      `https://fakestoreapi.com/products/category/${type}`
    );

    if (response.status === 200) {
      setNewArrData(response.data);
    }
  };

  console.log(newArrData);

  return (
    <div className="newArr">
      {newArrData.map((pro) => (
        <div className="newArr__card" key={pro.id}>
          <div className="newArr__card--image">
            <img src={pro.image} alt="" />
          </div>
          <div className="line"></div>
          <div className="newArr__card--text">
            <h1>{pro.title}</h1>
            <p>${pro.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewArr;
