import React from "react";
import alert from "./../../assets/alertsAssets/alertsIcon.png";

import {
  AlertsPosition,
  AlertsMain,
  Project,
  ProjectResults,
  Dados
} from "./styled";

export default function Alerts() {
  return (
    <AlertsPosition>
      <AlertsMain>
        <img src={alert} alt="alert" />
        HISTÓRICO DE ALERTAS
        <img src={alert} alt="alert" />
      </AlertsMain>

      <Project>
        <div>ID</div>
        <div>Equipamento</div>
        <div>Variável</div>
        <div>Grupo</div>
        <div>Início</div>
        <div>Fim</div>
        <div>Mensagem</div>
      </Project>

      <ProjectResults>
        <div>258A97</div>
        <div>JE-05</div>
        <div>Temp</div>
        <div>Crítico</div>
        <div>24.01.21 18:01</div>
        <div>25.02.21 18:11</div>
        <div>Disjun. desarmado</div>
      </ProjectResults>

      <ProjectResults>
        <div>258A97</div>
        <div>JE-05</div>
        <div>Temp</div>
        <div>Crítico</div>
        <div>24.01.21 18:01</div>
        <div>25.02.21 18:11</div>
        <div>Disjun. desarmado</div>
      </ProjectResults>
      <Dados>Data: 15/05/2021, às 16h27</Dados>
    </AlertsPosition>
  );
}
