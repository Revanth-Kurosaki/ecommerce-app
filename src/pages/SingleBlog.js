import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";
import blog from "../images/blog-1.jpg";
import Container from "../components/Container";

const SingleBlog = () => {
  return (
    <>
      <Meta title={"Dynamic Blog Name"} />
      <BreadCrumb title="Dynamic Blog Name" />
      <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="single-blog-card">
              <Link to="/blogs" className="d-flex align-items-center gap-10">
                <HiOutlineArrowLeft className="fs-4" />
                Go back to Blogs
              </Link>
              <h3 className="title">A beautiful Sunday Morning Renaissance</h3>
              <img src={blog} alt="blog" className="img-fluid w-100 my-4" />
              <p>
                Feeling used, but I'm still missing you And I can't see the end
                of this Just wanna feel your kiss against my lips And now all
                this time is passing by But I still can't seem to tell you why
                It hurts me every time I see you Realize how much I need you I
                hate you, I love you I hate that I love you Don't want to, but I
                can't put nobody else above you I hate you, I love you I hate
                that I want you You want her, you need her And I'll never be her
                What about all the times You would pick me up
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SingleBlog;
