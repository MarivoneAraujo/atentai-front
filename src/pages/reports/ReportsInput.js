import React, { useState } from "react";
import arrow from "./../../assets/reportsAssets/ArrowRight.png";
import styled from "styled-components";

export const SelectStyle = styled.div`
  background-color: #fff;
  padding: 0.625rem;
  width: 442px;
  border-radius: 0.625rem;

  font-family: "Josefin Sans", sans-serif;
  font-size: 1.5rem;
  font-weight: 400;

  position: relative;
  z-index: 100;
`;

export const Select = styled.div`
  display: flex;
  justify-content: space-between;
  color: #00000066;
  font-family: Josefin Sans;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: left;

  :hover {
    cursor: pointer;
    transform: scale(1.01);
  }
`;

export const ArrowImg = styled.img`
  width: 20px;
  height: 20px;
`;

export const DropdownList = styled.div`
  background-color: #c0c0c0;
  position: absolute;
  margin-top: -30px;
  left: 100%;
  height: 310px;
  width: 400px;
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
    transform: scale(1.01);
  }
`;

export default function ReportsInput(props) {
  const [open, setOpen] = useState(false);

  return (
    <SelectStyle>
      <Select
        onClick={() => {
          setOpen(!open);
        }}
      >
        {props.title}
        <ArrowImg src={arrow} alt="arrow" />
      </Select>

      {open ? (
        <DropdownList>
          <StyledX onClick={() => setOpen(false)}>X</StyledX>

          <DivOption value="maquina1" type={"submit"}>
            {props.div1}
          </DivOption>
          <DivOption value="maquina2" type={"submit"}>
            {props.div2}
          </DivOption>
          <DivOption value="maquina4" type={"submit"}>
            {props.div3}
          </DivOption>
        </DropdownList>
      ) : null}
    </SelectStyle>
  );
}
