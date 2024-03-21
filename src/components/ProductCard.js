import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import prodCompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
import tab from "../images/conv-tab.jpg";
import tab1 from "../images/conv-tab1.jpg";
import addCart from "../images/add-cart.svg";
import view from "../images/view.svg";

const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();
  return (
    <>
      <div
        className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}
      >
        <Link to=":id" className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src={wish} alt="wishlist" />
            </button>
          </div>
          <div className="product-image">
            <img src={tab1} className="img-fluid" alt="product" />
            <img src={tab} className="img-fluid" alt="product" />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Kids Headphones bulk 10 pack multi colored for students
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={3}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              I am going to be the most awesome thing of the universe. This is a
              big tablet that is worth buying I am designing this E Commerce
              Website and testing is also being done solely by me. From bottom
              to top everything is built by K Revanth.
            </p>
            <p className="price">Rs. 100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <button className="border-0 bg-transparent">
                <img src={prodCompare} alt="compare" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={view} alt="view" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={addCart} alt="addcart" />
              </button>
            </div>
          </div>
        </Link>
      </div>
      <div
        className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}
      >
        <Link className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src={wish} alt="wishlist" />
            </button>
          </div>
          <div className="product-image">
            <img src={tab1} className="img-fluid" alt="product" />
            <img src={tab} className="img-fluid" alt="product" />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Kids Headphones bulk 10 pack multi colored for students
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={3}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              I am going to be the most awesome thing of the universe. This is a
              big tablet that is worth buying I am designing this E Commerce
              Website and testing is also being done solely by me. From bottom
              to top everything is built by K Revanth.
            </p>
            <p className="price">Rs. 100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <button className="border-0 bg-transparent">
                <img src={prodCompare} alt="compare" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={view} alt="view" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={addCart} alt="addcart" />
              </button>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
