import styled from "styled-components";

const FooterCSS = styled.footer`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  text-align: center;
  width: 100vw;
  height: 40px;
  color: rgb(255, 255, 255);
  background-color: rgb(81, 81, 81);
  box-shadow: 0px -5px 5px 0px rgba(255, 215, 0, 0.5);
  @media (max-width: 648px) {
    height: 50px;
  }
`;

const FooterTextCSS = styled.p`
  margin: auto 0;
  color: rgb(144, 206, 161);
`;

const FooterLinkCSS = styled.a`
  padding-left: 10px;
  display: inline-block;
  text-decoration: none;
  color: rgb(255, 215, 0);
  &:hover,
  :focus {
    color: rgb(191, 250, 113);
  }
`;

export { FooterCSS, FooterTextCSS, FooterLinkCSS };
