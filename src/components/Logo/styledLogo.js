import styled from "styled-components";

const LogoLinkCSS = styled.a`
  display: block;
  width: 150px;
  height: 40px;
  background-image: url("https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_2-9665a76b1ae401a510ec1e0ca40ddcb3b0cfe45f1d51b77a308fea0845885648.svg");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: left;
  margin-right: 30px;
  @media (max-width: 648px) {
    margin-right: 0;
  }
`;

export { LogoLinkCSS };
