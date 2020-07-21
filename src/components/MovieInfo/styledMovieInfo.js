import styled from "styled-components";

const WrapperMovieInfoCSS = styled.div`
  display: flex;
  color: rgb(255, 215, 0);
  margin-bottom: 20px;
  @media (max-width: 648px) {
    flex-direction: column;
    align-items: center;
  }
`;

const MovieImgCSS = styled.img`
  margin-right: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 20px 0px rgba(255, 215, 0, 0.5);
  @media (max-width: 648px) {
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

const InfoBoxCSS = styled.div`
  padding: 10px 10px;
  min-width: 300px;
  background-color: rgb(81, 81, 81);
  border-radius: 5px;
  box-shadow: 0px 0px 20px 0px rgba(255, 215, 0, 0.5);
  text-align: center;
`;

const TitleH1CSS = styled.h1`
  margin: 0;
  margin-bottom: 20px;
`;

const TitleH2CSS = styled.h2`
  margin: 0;
  margin-bottom: 10px;
`;

const InfoTextCSS = styled.p`
  margin: 0;
  color: rgb(191, 250, 113);
  margin-bottom: 20px;
`;

const GenresListCSS = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const GenresItemCSS = styled.li`
  margin-right: 10px;
  color: rgb(191, 250, 113);
  &:last-child {
    margin: 0;
  }
`;

export {
  WrapperMovieInfoCSS,
  MovieImgCSS,
  InfoBoxCSS,
  TitleH1CSS,
  TitleH2CSS,
  InfoTextCSS,
  GenresListCSS,
  GenresItemCSS,
};
