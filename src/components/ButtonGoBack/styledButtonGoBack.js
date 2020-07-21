import styled from "styled-components";

const ButtonGoBackCSS = styled.button`
  background-color: rgb(81, 81, 81);
  color: rgb(255, 215, 0);
  margin-bottom: 10px;
  margin-left: 20px;
  box-shadow: 0px 0px 20px 0px rgba(255, 215, 0, 0.5);
  &:hover,
  :focus {
    color: rgb(191, 250, 113);
    box-shadow: 0px 0px 30px 0px rgb(191, 250, 113);
  }
`;

export default ButtonGoBackCSS;
