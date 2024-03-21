import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <div className="blog-card">
      <div className="card-image">
        <img src="images/blog-1.jpg" alt="blog" className="img-fluid" />
      </div>
      <div className="blog-content">
        <p className="date">February 22, 2024</p>
        <h5 className="title">Happy Birthday Steve Jobs!</h5>
        <p className="desc">
          Steve Jobs' Happy Birthday is celebrated on 24th of February. The same
          day as Revanth Kurosaki, developer of this esteemed website
        </p>
        <Link to="/blogs/:id" className="button">
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
