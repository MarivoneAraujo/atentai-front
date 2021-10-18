import React from "react";
import Thermometer from "react-thermometer";
import "./Information.css";
import battery from "./../../assets/informationAssets/battery.png";
import umidade from "./../../assets/informationAssets/umidadeImg.png";
import light from "./../../assets/informationAssets/light.png";
import button from "./../../assets/informationAssets/button.png";
import DonutChart from "react-donut-chart";

import {
  InformationPosition,
  ContentWrapper,
  ContentGrid,
  ContentFlexRowOne,
  ContentFlexRowTwo,
  Temperatura,
  Text,
  ThermoPosition,
  Bateria,
  BatteryImgStyle,
  Values,
  RankOrgMedio,
  GougeMargin,
  Umidade,
  UmidityImg,
  UsoOrçReceita,
  LuzesGerais,
  ImgButton,
  LightOrganize,
  TextOrg,
  OnText,
  ImgLight,
} from "./styled.js";

export default function Information() {
  return (
    <InformationPosition>
      <ContentWrapper>
        <ContentGrid>
          <ContentFlexRowOne>
            <Temperatura>
              {" "}
              <Text>Temperatura</Text>
              <ThermoPosition>
                <Thermometer
                  min={15}
                  max={30}
                  width={20}
                  height={100}
                  backgroundColor={"gray"}
                  fillColor={"black"}
                  current={10}
                />
              </ThermoPosition>
              <Values>24ºC</Values>
            </Temperatura>

            <Bateria>
              <Text>Bateria</Text>
              <BatteryImgStyle src={battery} alt="Bateria" />
              <Values>92%</Values>
            </Bateria>


            <RankOrgMedio>
              <Text>Rank Orgânico Médio</Text>

              <div className="gauge">
                <div className="gauge__body">
                  <div className="gauge__fill"></div>
                  <div className="gauge__cover"></div>
                </div>
              </div>
              <GougeMargin></GougeMargin>
              <Values>75%</Values>
            </RankOrgMedio>
          </ContentFlexRowOne>

          <ContentFlexRowTwo>
            <Umidade>
              <Text>Umidade</Text>
              <UmidityImg src={umidade} />
              <Values>43,7%</Values>
            </Umidade>

            <UsoOrçReceita>
              <Text>Uso de Orçamento de Receita</Text>
              <DonutChart
                height={350}
                width={540}
                colors={["#000000"]}
                data={[
                  {
                    label: "Uso",
                    value: 75,
                  },
                  {
                    label: "Restante",
                    value: 25,
                    isEmpty: true,
                  },
                ]}
              />
              <GougeMargin></GougeMargin>
            </UsoOrçReceita>

            <LuzesGerais>
              <LightOrganize>
                <TextOrg>Luzes Gerais</TextOrg>
                <ImgButton src={button} />
              </LightOrganize>
              <ImgLight src={light} />
              <OnText>ON</OnText>
              {/* <OnText>OFF</OnText> */}
            </LuzesGerais>
            
          </ContentFlexRowTwo>
        </ContentGrid>
      </ContentWrapper>
    </InformationPosition>
  );
}
