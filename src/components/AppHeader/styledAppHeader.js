import styled from "styled-components";

const AppHeaderCSS = styled.header`
  position: fixed;
  z-index: 10;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: start;
  padding-left: 10px;
  background-color: rgb(81, 81, 81);
  box-shadow: 0px 5px 5px 0px rgba(255, 215, 0, 0.5);
  @media (max-width: 648px) {
    flex-direction: column;
    align-items: center;
    padding-left: 0;
  }
`;

export { AppHeaderCSS };
