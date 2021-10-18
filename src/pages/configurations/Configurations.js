import React from "react";
import arrow from "./../../assets/configurationAssets/arrow.png";

import {
  ConfigurationsPosition,
  DisplayFlex,
  Display,
  ConfigMain,
  Rectangle,
  Project,
  ProjectName,
  ButtonSend,
  Localization,
  LocalName,
} from "./styled";

export default function Reports() {
  return (
    <ConfigurationsPosition>
      <ConfigMain>CONFIGURAÇÕES</ConfigMain>

      <DisplayFlex>
        <div>
          <Rectangle>
            Cliente:
            <img src={arrow} alt="arrow" />
          </Rectangle>
        </div>

        <div>
          <Rectangle>
            Usuário:
            <img src={arrow} alt="arrow" />
          </Rectangle>
        </div>

        <div>
          <Rectangle>
            Permissão:
            <img src={arrow} alt="arrow" />
          </Rectangle>
        </div>
      </DisplayFlex>

      <Project>
        Projeto:
        <ProjectName> NOME DO PROJETO/MÁQUINA</ProjectName>
      </Project>

      <DisplayFlex>
        <div>
          <Rectangle>
            Dispositivo:
            <img src={arrow} alt="arrow" />
          </Rectangle>
        </div>

        <div>
          <Rectangle>
            Variável:
            <img src={arrow} alt="arrow" />
          </Rectangle>
        </div>

        <div>
          <Rectangle>Unidade:</Rectangle>
        </div>
      </DisplayFlex>

      <DisplayFlex>
        <div>
          <Rectangle>
            Simbolo:
            <img src={arrow} alt="arrow" />
          </Rectangle>
        </div>

        <div>
          <Rectangle>
            Modelo:
            <img src={arrow} alt="arrow" />
          </Rectangle>
        </div>

        <div>
          <Rectangle>Tamanho:</Rectangle>
        </div>
      </DisplayFlex>

      <Display>
        <Localization>
          Localização:
          <LocalName>
            Lorem ipsum dolor sit amet, consectetur adipiscing
          </LocalName>
        </Localization>
        <div>
          <ButtonSend>Enviar</ButtonSend>
        </div>
      </Display>
    </ConfigurationsPosition>
  );
}
