import React from "react";
import arrow from "./../../assets/navigationBarAssets/arrow.png";
import arrowUp from "./../../assets/navigationBarAssets/arrowUp.png";
import MessageModal from "./MessageModal";

import {
  NavigationBarWrapper,
  ArrowUp,
  ArrowDown,
  RoundBackground,
} from "./styled.js";

function NavigationBar() {
  return (
    <NavigationBarWrapper>
      <ArrowUp src={arrowUp} alt="arrow up" />
      <ArrowDown src={arrow} alt="arrow down" />

      <RoundBackground>
        <MessageModal />
      </RoundBackground>
    </NavigationBarWrapper>
  );
}

export default NavigationBar;
