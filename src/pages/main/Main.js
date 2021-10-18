import React, { useState } from "react";
import logoHeader from "./../../assets/favouritesAssets/Logo_fav.png";
import AvatarAndLogo from "./../../assets/favouritesAssets/AvatarAndLogo.png";
import arrow from "./../../assets/mainAssets/arrow.png";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./../../themes/Themes";

import {
  FavouritesWrapper,
  Logo,
  SelectStyle,
  SelectWrapper,
  ArrowImg,
  DropdownList,
  DivOption,
  StyledX,
  IconFiBell,
  BellRoundBackground,
  AvatarIMG,
  CheckBoxLabel,
  CheckBox,
  CountAlert,
} from "./styled.js";

import { useHistory } from "react-router";
import { goToMain } from "../../routes/coordinator";

function Main() {
  const history = useHistory();

  const [open, setOpen] = useState(false);

  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    const isChecked = document.getElementById("checkbox").checked;
    isChecked ? setTheme("light") : setTheme("dark");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <FavouritesWrapper>
        <Logo
          src={logoHeader}
          alt="Atentai logo"
          onClick={() => goToMain(history)}
        />

        <SelectStyle>
          <div>NOME DO PROJETO / MÁQUINA</div>
          <SelectWrapper
            onClick={() => {
              setOpen(!open);
            }}
          >
            <div>Máquina 1</div>
            <ArrowImg src={arrow} alt="arrow" />
          </SelectWrapper>

          {open ? (
            <DropdownList>
              <StyledX onClick={() => setOpen(false)}>X</StyledX>

              <DivOption value="maquina1" type={"submit"}>
                Máquina 1{" "}
              </DivOption>
              <DivOption value="maquina2" type={"submit"}>
                Máquina 2{" "}
              </DivOption>
              <DivOption value="maquina4" type={"submit"}>
                Máquina 3{" "}
              </DivOption>
              <DivOption value="maquina4" type={"submit"}>
                Máquina 4{" "}
              </DivOption>
            </DropdownList>
          ) : null}
        </SelectStyle>

        <BellRoundBackground>
          <CountAlert>2</CountAlert>
          <IconFiBell />
        </BellRoundBackground>

        <AvatarIMG src={AvatarAndLogo} alt="Atentai logo" />

        <CheckBox id="checkbox" type="checkbox" />

        <CheckBoxLabel htmlFor="checkbox" onClick={() => themeToggler()} />
      </FavouritesWrapper>
    </ThemeProvider>
  );
}

export default Main;
