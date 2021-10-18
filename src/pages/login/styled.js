import styled from "styled-components";
import email from "./../../assets/loginAssets/e-mail.png";
import password from "./../../assets/loginAssets/password.png";
import passwordEye from "./../../assets/loginAssets/password-eye.png";
import logoMmarcadagua from "./../../assets/loginAssets/logo-marcadagua.png";

export const InputLayoutEmail = styled.input`
  background-color: #ffff;
  color: #c0c0c0;
  font-family: "Josefin Sans", sans-serif;
  font-weight: 400;
  font-size: 1.563rem;
  width: 19.375rem;
  height: 3.75rem;
  margin-top: 1.25rem;
  margin-bottom: 0.938rem;
  border: none;
  border-radius: 0.813rem;

  background-image: url(${email});
  padding-left: 4.063rem;
  background-repeat: no-repeat;
  background-size: 2.5rem 2.5rem;
  background-position-x: 0.625rem;
  background-position-y: 0.625rem;

  :focus {
    outline: none;
  }

  &::-webkit-input-placeholder {
    /* color: red; */
  }
`;
export const InputLayoutPassword = styled.input`
  background-color: #ffff;
  color: #c0c0c0;
  font-family: "Josefin Sans", sans-serif;
  font-weight: 400;
  font-size: 1.563rem;
  width: 19.375rem;
  height: 3.75rem;
  border: none;
  border-radius: 0.813rem;

  background-image: url(${password});
  /* background-image: url(${passwordEye}); */
  padding-left: 4.063rem;
  background-repeat: no-repeat;
  background-size: 2.5rem 2.5rem;
  background-position-x: 0.625rem;
  background-position-y: 0.625rem;

  :focus {
    outline: none;
  }
  &::-webkit-input-placeholder {
    /* color: red; */
  }
`;

export const LoginMainLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${logoMmarcadagua});
  background-repeat: no-repeat;
  background-size: 100%;
  width: 100%;
  height: 100%;

  background-color: #e5e5e5;
`;

export const IMGLogo = styled.img`
  height: 11.938rem;
  width: 44.875rem;
  margin-top: 7.5rem;
`;
export const IMGLogoInfo = styled.img`
  height: 6.313rem;
  width: 44.875rem;
`;

export const GridLayout = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
`;

export const LinksLayout = styled.div`
  display: flex;
  margin-top: 1.875rem;
`;

export const ButtonPosition = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -5.313rem;
`;

export const LinksPattern = styled.div`
  color: #4c9515;
  font-family: "Josefin Sans", sans-serif;
  font-weight: bold;
  font-size: 1.875rem;

  :hover {
    cursor: pointer;
    left: 0.563rem;
    /* transform: scale(1.1); */
  }
`;

export const InputIcon = styled.img`
  position: relative;
  left: 20rem;
  top: -5rem;
  :hover {
    cursor: pointer;
  }
`;
export const GreenButton = styled.button`
  background-color: #217317;
  font-family: "Josefin Sans", sans-serif;
  font-weight: 300;
  font-size: 3rem;
  color: white;
  height: 4.688rem;
  width: 15rem;
  border: none;
  border-radius: 0.813rem;

  :hover {
    cursor: pointer;
    left: 0.563rem;
    transform: scale(1.1);
  }
`;
