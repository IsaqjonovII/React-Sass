import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import "./style.css"
import { PRODUCTS__DATA } from "../../mocks/data";
import Card from "../../components/Card";


const Shop = () => {
  return (
    <div className="shop__container">
      <h3>Products/ <span>Shopnow</span> </h3>

      <h1>Checkout</h1>

      <div className="input__container flex">
        <input type="text" placeholder="Search..." />
        <FaSearch className="search__icon" />
      </div>
      <div className="product__wrapper">
        {PRODUCTS__DATA.map(
          ({ id, title, price, image, dividedpayment, label }) => (
            <Link className="product__link" to={"/products/" + id} key={id}>
              <Card
               
                id={id}
                title={title}
                price={price}
                image={image}
                label={label}
                dividedpayment={dividedpayment}
              />
            </Link>
          )
        )}
      </div>
    </div>
  );
};

export default Shop;
