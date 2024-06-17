import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Container from "../../layout/Container";
import Footer from "../../components/Footer/Footer";
import axios from "axios";
import Card from "../../components/Card/Card";
import "./Shop.scss";
import Filter from "../../components/Filter/Filter";
import { Link } from "react-router-dom";
import { useGetAllDataQuery } from "../../toolkit/dataApi/dataApi";

const Shop = () => {
  const {data, error, isLoading} = useGetAllDataQuery()

  console.log(data);

  return (
    <div className="shop">
      <Container>
        <Navbar />
        <div className="main">
          <Filter />
          <div className="cards">
            {data && data.map((card, i) => <Link key={i} to={`/proPage/` + card.id}>
            <Card {...card} />
            </Link>)}
          </div>
        </div>
        <Footer />
      </Container>
    </div>
  );
};

export default Shop;
