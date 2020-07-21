import styled from "styled-components";

const SearchFormCSS = styled.form`
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 15;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 300px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
  @media (max-width: 648px) {
    top: 70px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const SearchFormButtonCSS = styled.button`
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 0;
  background-image: url("https://image.flaticon.com/icons/svg/149/149852.svg");
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  &:hover {
    opacity: 1;
  }
`;

const SearchFormButtonLabelCSS = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;

const SearchFormInputCSS = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 14px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;

  &::placeholder {
    font: inherit;
    font-size: 14px;
  }
`;

export {
  SearchFormCSS,
  SearchFormButtonCSS,
  SearchFormButtonLabelCSS,
  SearchFormInputCSS,
};
