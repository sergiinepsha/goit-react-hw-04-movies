import styled from "styled-components";
import { Link } from "react-router-dom";

const AdditionalInfoCSS = styled.div`
  border-radius: 5px;
  box-shadow: 0px 0px 20px 0px rgba(255, 215, 0, 0.5);
  background-color: rgb(81, 81, 81);
  text-align: center;
  padding: 20px 0;
  margin-bottom: 20px;
`;

const TitleH2CSS = styled.h2`
  margin: 0;
  margin-bottom: 10px;
  color: rgb(255, 215, 0);
`;

const AdditionalInfoListCSS = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
`;

const AdditionalInfoItemCSS = styled.li`
  margin-right: 20px;
  width: 70px;
  height: 25px;
  border: 1px solid rgb(255, 215, 0);
  border-radius: 2px;
  box-shadow: 0px 0px 20px 0px rgba(255, 215, 0, 0.5);
  &:last-child {
    margin: 0;
  }
  &:hover,
  :focus {
    box-shadow: 0px 0px 20px 0px rgb(191, 250, 113);
  }
`;

const AdditionalInfoLinkCSS = styled(Link)`
  display: block;
  text-decoration: none;
  width: 100%;
  height: 100%;
  color: rgb(255, 215, 0);
  &:hover,
  :focus {
    color: rgb(191, 250, 113);
  }
`;

export {
  AdditionalInfoCSS,
  TitleH2CSS,
  AdditionalInfoListCSS,
  AdditionalInfoItemCSS,
  AdditionalInfoLinkCSS,
};
