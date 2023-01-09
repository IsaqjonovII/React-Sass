import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PRODUCTS__DATA } from "../../mocks/data";
import "./style.css";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [buttonId, setButtonId] = useState(0);

  useEffect(() => {
    const filteredproduct = PRODUCTS__DATA.filter((pro) => pro.id === +id);

    setProduct(filteredproduct);
  }, [id]);
  const plans = ["3 months", "6 months", "12 months", "24 months"];

  return (
    <div className="product__page__container">
      {product.map(({ id, title, price, image, label, dividedpayment }) => (
        <div className="product__container" key={id}>
          <p className="breadcrumb">
            Products / Shop Now / <span>{title}</span>
          </p>

          <h2 className="product__title">{title}</h2>

          <div className="product__info__wrapper flex">
            <div className="product__img__container">
              <img className="product__img" src={image} alt="" />
              <div className="labels__container">
                {label.map((l) => (
                  <img src={l} alt="" />
                ))}
              </div>
            </div>

            <div className="product__info">
              <div className="info">
                <p>Price</p>
                <h3 className="product__price">{price}</h3>
              </div>
              <div className="info">
                <p className="flex">
                  Total price (with markup){" "}
                  <span className="label__button">From ${dividedpayment}</span>{" "}
                </p>
                <h3>${price}</h3>
              </div>
              <div className="info">
                <div className="plans">
                  {plans.map((plan, index) => (
                    <button
                      key={index}
                      className={index === buttonId ? "active__btn plan__btn" : "plan__btn"}
                      onClick={() => setButtonId(index)}
                    >
                      {plan}
                    </button>
                  ))}
                </div>
                <p className="markup">Markup { } %</p>
              </div>

              <div className="info">
                <p>General info</p>
                <ul className="info__collection">
                  <li>Made of glass (classic)</li>
                  <li>Standard: 2G, 3G, 4G (LTE), 5G</li>
                  <li>Operating system: Android 11</li>
                </ul>
                <a href="#nowhere">See more</a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
