import React from "react";
import "./style.css";



const Card = ({ id, title, price, image, dividedpayment, label }) => {
  const payment__plan__date = Math.floor(price / dividedpayment)
  return (
    <div className="card">
      <img className="product__img" src={image} alt="" />
      <div className="labels__container">
        {label.map((l, inx) => (
          <img key={inx} src={l} alt="" />
        ))}
      </div>
      <h3 className="product__title">{title}</h3>

      <b className="product__price">${price}</b>

      <div className="payment__plan flex">
        <button className="label__btn">from {dividedpayment}</button> <span>x{payment__plan__date}</span>
      </div>
    </div>
  );
};

export default Card;
