import styled from "styled-components";

const ReviewsListCSS = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  list-style: none;
`;

const ReviewsItemCSS = styled.li`
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 20px 0px rgba(255, 215, 0, 0.5);
  &:hover,
  :focus {
    box-shadow: 0px 0px 30px 0px rgb(191, 250, 113);
  }
  &:hover p,
  :focus p {
    color: rgb(191, 250, 113);
  }
`;

const ReviewsItemAuthorCSS = styled.p`
  margin: 0;
  font-size: 18px;
  text-align: center;
  font-weight: 700;
  color: rgb(255, 215, 0);
  margin-bottom: 10px;
`;

const ReviewsItemContentCSS = styled.p`
  margin: 0;
  font-size: 14px;
  text-align: justify;
  color: rgb(255, 215, 0);
  margin-bottom: 5px;
`;

const NoReviewsCSS = styled.p`
  margin: 0;
  font-size: 14px;
  text-align: center;
  color: rgb(255, 215, 0);
  margin-bottom: 5px;
`;

export {
  ReviewsListCSS,
  ReviewsItemCSS,
  ReviewsItemAuthorCSS,
  ReviewsItemContentCSS,
  NoReviewsCSS,
};
