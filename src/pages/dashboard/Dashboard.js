import React from "react";
import Thermometer from "react-thermometer";
import battery from "./../../assets/informationAssets/battery.png";
import umidade from "./../../assets/informationAssets/umidadeImg.png";
import light from "./../../assets/informationAssets/light.png";
import button from "./../../assets/informationAssets/button.png";
import "./Dashboard.css";
import DonutChart from "react-donut-chart";

import {
  DashboardPosition,
  ContentWrapper,
  ContentGrid,
  DisplayFlexRow,
  Temperatura,
  Text,
  ThermoPosition,
  Values,
  Bateria,
  BatteryImgStyle,
  BetterRanking,
  Umidade,
  UmidityImg,
  ListaDeErros,
  LuzesGerais,
  LightOrganize,
  TextOrg,
  ImgButton,
  ImgLight,
  OnText,
  RankOrgMedio,
  UsoOrçReceita,
} from "./styled";
import GroupedBar from "./GroupBarChart";
import MultiAxisLine from "./MultiAxisChart";

function Dashboard() {
  return (
    <DashboardPosition>
      <ContentWrapper>
        <ContentGrid>
          <DisplayFlexRow>
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
            <BetterRanking>
              <Text>Melhor ranking</Text>
              <GroupedBar />
            </BetterRanking>
          </DisplayFlexRow>

          <DisplayFlexRow>
            <Umidade>
              <Text>Umidade</Text>
              <UmidityImg src={umidade} />
              <Values>43,7%</Values>
            </Umidade>
            <ListaDeErros>
              <Text>Lista de Erros</Text>
              <MultiAxisLine />
            </ListaDeErros>
            <LuzesGerais>
              <LightOrganize>
                <TextOrg>Luzes Gerais</TextOrg>
                <ImgButton src={button} />
              </LightOrganize>
              <ImgLight src={light} />
              <OnText>ON</OnText>
              {/* <OnText>OFF</OnText> */}
            </LuzesGerais>
          </DisplayFlexRow>
          
          <DisplayFlexRow>
            <RankOrgMedio>
              <Text>Rank Orgânico Médio</Text>

              <div className="gauge">
                <div className="gauge__body">
                  <div className="gauge__fill"></div>
                  <div className="gauge__cover"></div>
                </div>
              </div>

              <Values>75%</Values>
            </RankOrgMedio>

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
            </UsoOrçReceita>

          </DisplayFlexRow>
        </ContentGrid>
      </ContentWrapper>
    </DashboardPosition>
  );
}

export default Dashboard;
