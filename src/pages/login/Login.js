import React, {useState} from "react";
import logoBig from "./../../assets/loginAssets/logo_big.png";
import logoBig2 from "./../../assets/loginAssets/logo_big_2.png";
import passwordEye from "./../../assets/loginAssets/password-eye.png";
import {
  InputLayoutEmail,
  InputLayoutPassword,
  LoginMainLayout,
  IMGLogo,
  IMGLogoInfo,
  GridLayout,
  LinksLayout,
  ButtonPosition,
  LinksPattern,
  InputIcon,
  GreenButton,
} from "./styled";

import { useHistory } from "react-router";
import { goToForgotPassword } from "../../routes/coordinator";
import { goToMain } from "../../routes/coordinator";
import useForm from "../../hooks/useForm";
import axios from "axios";


export default function Login() {
  const history = useHistory();
  const [form, onChange, clear] = useForm({ email: "", password: "" });
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  
  const onSubmitForm = (event) => {
    console.log(form);
    event.preventDefault();
    login()
  };

    const login = () =>{
      axios.post("/Auth", form)
      .then((res) => 
       localStorage.setItem("token", res.data.token),
       clear()
      )
      .catch((error) => alert("Erro ao logar"))
    }

    const handleClickShowPassword = () => {
      setValues({ ...values, showPassword: !values.showPassword });
    };

  return (
    <LoginMainLayout>
      <IMGLogo src={logoBig} alt="Atentai logo" />
      <IMGLogoInfo src={logoBig2} alt="Atentai logo info" />

      {/* <form onSubmit={onSubmitForm}> */}
        <form>
        <GridLayout>
          <InputLayoutEmail
            name={"email"}
            placeholder="| E-mail"
            id="email"
            // type="email"
            value={form.email}
            onChange={onChange}
            // title={"Insira um e-mail válido."}
            // pattern={"^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"}
            required
          />

          <InputLayoutPassword
            name={"password"}
            placeholder="| Senha"
            type={"password"}
            type={values.showPassword ? 'text' : 'password'}
            id="password"
            value={form.password}
            onChange={onChange}
            title={"A senha deve ter no mínimo 5 caracteres."}
            pattern={"^[A-Za-z0-9d]{5,}$"}
            required

          />
          <InputIcon src={passwordEye} alt="InputEyeIcon"
            onClick={handleClickShowPassword}
          />
        </GridLayout>

        <ButtonPosition>
          <GreenButton
            type={"submit"}
            onClick={() => goToMain(history)}
          >
            ENTRAR
          </GreenButton>
        </ButtonPosition>
      </form>

      <LinksLayout>
        <LinksPattern onClick={() => goToForgotPassword(history)}>
          Esqueci a Senha
        </LinksPattern>
        <LinksPattern>|</LinksPattern>
        <LinksPattern>Cadastro</LinksPattern>
      </LinksLayout>
    </LoginMainLayout>
  );
}
