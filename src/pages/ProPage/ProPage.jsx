import React from "react";
import Container from "../../layout/Container";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../toolkit/cartSlice/cartSlice";
import { useGetAllDataQuery } from "../../toolkit/dataApi/dataApi";

const ProPage = () => {
  const { proId } = useParams();
  const { data, error, isLoading } = useGetAllDataQuery();
  const dispatch = useDispatch()
  
  const addToCartHandler = (pro) => {
    dispatch(addToCart(pro))
  }
  


  if (isLoading) {
    return <Container>Loading...</Container>;
  }

  if (error) {
    return <Container>Error: {error.message}</Container>;
  }

  const findPro = data.find((pro) => pro.id === +proId);

  if (!findPro) {
    return <Container>Product not found</Container>;
  }

  return (
    <Container>
      <div className="proPage">
        <button onClick={() => addToCartHandler(findPro)}>Cart</button>
        <div className="proPage__image">
          <img src={findPro.image} alt={findPro.title} />
        </div>
        <div className="proPage__info">
          <div className="proPage__info--topInfo">
            <h1 className="proPage__info--topInfo-logo">Fasco</h1>
            <div className="proPage__info--topInfo-sale">
              <div className="proPage__info--topInfo-sale_info">
                <h2>{findPro.price}</h2>
                <span>13 Reviews</span>
              </div>
              <span>Star</span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProPage;
