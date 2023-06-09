import React from "react";
import "./reviews.css";
import reviewsimg from "../../assets/icons/reviews.png";
import rating from "../../assets/icons/rating.png";
const Reviews = () => {
  const ReviewsList = [
    {
      image: reviewsimg,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      icons: rating,
    },
    {
      image: reviewsimg,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      icons: rating,
    },
    {
      image: reviewsimg,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      icons: rating,
    },
    {
      image: reviewsimg,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      icons: rating,
    },
    {
      image: reviewsimg,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      icons: rating,
    },
    {
      image: reviewsimg,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      icons: rating,
    },
  ];
  const RenderReviews = ReviewsList.map((reviewstype) => {
    return (
      <div className="reviews_main">
        <img src={reviewstype.image} alt="image" />
        <p>{reviewstype.description}</p>
        <img src={reviewstype.icons} alt="rating" />
      </div>
    );
  });
  return (
    <React.Fragment>
      <div className="reviewsheading" id="reviewspage">
        <h1>REVIEWS</h1>
        <div className="reviewscards">{RenderReviews}</div>
      </div>
    </React.Fragment>
  );
};
export default Reviews;
