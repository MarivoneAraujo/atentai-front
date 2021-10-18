import React from "react";
import PasswordLocker from "./../../assets/forgotPasswordAssets/passwordLocker.png";

import {
  MainLayout,
  ItemsPosition,
  ForgotText,
  InformText,
  InputLayoutEmail,
  GreenKnob,
  InputPosition
} from "./styled.js";

export default function ForgotPassword() {
  return (
    <MainLayout>
      <ItemsPosition>
        <img src={PasswordLocker} alt="Password Locker" />
        <ForgotText>ESQUECEU SUA SENHA?</ForgotText>
        <InformText>
          Informe seu e-mail para recuperar a senha de acesso
        </InformText>
        <form>
          <InputPosition>
          <InputLayoutEmail
            name="email"
            placeholder="| E-mail"
            id="email"
            type="email"
            value={null}
            onChange={null}
            title={"Insira um e-mail válido."}
            pattern={"^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"}
            required
          />
          <GreenKnob type="submit">RECUPERAR SENHA</GreenKnob>
          </InputPosition>
        </form>
      </ItemsPosition>
    </MainLayout>
  );
}
