import styled from "styled-components";
import BellBackground from "./../../assets/favouritesAssets/background-bell.png";
import { FiBell } from "react-icons/fi";

export const AppWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 15fr 1fr;
`;

export const FavouritesWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 5fr 0.5fr 1fr 0fr 1fr;
  align-items: center;
  margin-left: 2.188rem;
`;

export const Logo = styled.img`
  margin-right: 1.563rem;
  :hover {
    cursor: pointer;
    transform: scale(1.01);
  }
`;

export const SelectStyle = styled.div`
  background-color: #fff;
  padding: 0.625rem;
  width: 29.688rem;
  border-radius: 0.625rem;

  font-family: "Josefin Sans", sans-serif;
  font-size: 1.5rem;
  font-weight: 400;

  position: relative;
`;

export const SelectWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  :hover {
    cursor: pointer;
  }
`;

export const ArrowImg = styled.img`
  width: 20px;
  height: 20px;
`;
export const DropdownList = styled.div`
  background-color: #c0c0c0;
  position: absolute;
  left: 19%;
  height: 390px;
  width: 400px;
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  z-index: 100;
`;

export const DivOption = styled.button`
  height: 68px;
  width: 360px;
  left: 414.44140625px;
  margin-top: 13px;
  border: none;
  border-radius: 13px;
  background-color: #fff;
  display: flex;
  align-items: center;
  padding-left: 10px;

  font-family: "Josefin Sans", sans-serif;
  color: #00000066;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: left;

  :hover {
    cursor: pointer;
  }
`;

export const StyledX = styled.button`
  margin-left: 310px;
  font-family: "Josefin Sans", sans-serif;
  font-size: 30px;
  font-weight: 700;
  border: none;
  background-color: none;
  color: #fff;
  background-color: #c0c0c0;

  :hover {
    cursor: pointer;
  }
`;

export const IconFiBell = styled(FiBell)`
  height: 1.875rem;
  width: 1.875rem;
  color: #fff;
  position: absolute;
  margin-left: 10px;
`;

export const BellRoundBackground = styled.div`
  background-image: url(${BellBackground});
  background-repeat: no-repeat;
  background-size: 3rem;
  height: 30%;
  display: flex;
  align-items: center;
`;

export const AvatarIMG = styled.img`
  height: 3.75rem;
  margin-left: 0.313rem;
`;

export const CheckBoxLabel = styled.label`
  width: 3rem;
  height: 1.625rem;
  border-radius: 0.938rem;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 1.125rem;
    height: 1.125rem;
    margin: 0.188rem;
    background: #ffffff;
    box-shadow: 0.063rem 0.188rem 0.188rem 0.063rem rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
export const CheckBox = styled.input`
  opacity: 0;
  &:checked + ${CheckBoxLabel} {
    background: #237317;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 1.125rem;
      height: 1.125rem;
      margin-left: 1.313rem;
      transition: 0.2s;
    }
  }
`;

export const CountAlert = styled.span`
  margin-top: 56px;

  border: 1px solid #000000;
  border-radius: 50%;
  font-family: Josefin Sans;
  font-size: 32px;
  font-weight: 600;
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e4e5e4;
`;
