import React from "react";
import PropTypes from "prop-types";

import {
  ReviewsListCSS,
  ReviewsItemCSS,
  ReviewsItemAuthorCSS,
  ReviewsItemContentCSS,
  NoReviewsCSS,
} from "./styledReviewsList";

const ReviewsList = ({ reviews }) => {
  return (
    <>
      {reviews.length > 0 ? (
        <ReviewsListCSS>
          {reviews.map(({ id, author, content }) => (
            <ReviewsItemCSS key={id}>
              <ReviewsItemAuthorCSS>Author: {author}</ReviewsItemAuthorCSS>
              <ReviewsItemContentCSS>{content}</ReviewsItemContentCSS>
            </ReviewsItemCSS>
          ))}
        </ReviewsListCSS>
      ) : (
        <NoReviewsCSS>We don't have any reviews for this movie</NoReviewsCSS>
      )}
    </>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default ReviewsList;
