import React, { useState } from "react";
import ReportsInput from "./ReportsInput";
import styled from "styled-components";

import email from "./../../assets/reportsAssets/email.png";
import whatts from "./../../assets/reportsAssets/whatts.png";
import download from "./../../assets/reportsAssets/download.png";
import arrowUp from "./../../assets/reportsAssets/arrowUp.png";
import loader from "./../../assets/reportsAssets/loader.gif";

import {
  ReportsPosition,
  InfoPosition,
  InputsAndButtonPosition,
  ReportsInputPosition,
  ButtonsInputPosition,
  MainButtonsPosition,
  DesireQuestion,
  GenerateButton,
  ProgrammingButton,
  ButtonsPosition,
  ButtonSizeImgEmail,
  ButtonSizeImgWhatts,
  ButtonSizeImgDownload,
  LoadingInfoPosition,
  Text,
  LoadinImgStyle
} from "./styled"

export default function Reports() {
  const [isLoading, setLoading] = useState(false);

  const fetchData = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  return (
    <ReportsPosition>
      <InfoPosition>
        <InputsAndButtonPosition>
          <ReportsInputPosition>
            <ReportsInput
              title={"Equipamentos"}
              div1={"JE -os"}
              div2={"LOGO"}
              div3={"Lorem Ipsum"}
            />
            <ReportsInput
              title={"Variável"}
              div1={"Temperatura"}
              div2={"Abastecimento"}
              div3={"Lorem Ipsum"}
            />
            <ReportsInput
              title={"Período"}
              div1={"Diário"}
              div2={"Semanal"}
              div3={"Anual"}
            />
            <ReportsInput
              title={"Horário"}
              div1={null}
              div2={null}
              div3={null}
            />
          </ReportsInputPosition>

          <ButtonsInputPosition>
            <DesireQuestion>Como deseja Prosseguir?</DesireQuestion>

            <MainButtonsPosition>
              <GenerateButton onClick={fetchData}>Gerar</GenerateButton>

              <ProgrammingButton>
                PROGRAMAR
                <img src={arrowUp} alt="arrowUp" />
              </ProgrammingButton>
            </MainButtonsPosition>
          </ButtonsInputPosition>
        </InputsAndButtonPosition>

        <LoadingInfoPosition>
          {isLoading ? <LoadinImgStyle src={loader} alt="Loading" /> : ""}

          <Text>
            RELATÓRIO GERADO
            <p>Por onde deseja receber?</p>
          </Text>

          <ButtonsPosition>
            <ButtonSizeImgEmail src={email} alt="emailButton" />
            <ButtonSizeImgWhatts src={whatts} alt="whattsButton" />
            <ButtonSizeImgDownload src={download} alt="downloadButton" />
          </ButtonsPosition>
        </LoadingInfoPosition>
      </InfoPosition>
    </ReportsPosition>
  );
}
