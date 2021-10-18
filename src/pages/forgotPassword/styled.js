import styled from 'styled-components';
import email from './../../assets/loginAssets/e-mail.png';
import logoMmarcadagua from './../../assets/loginAssets/logo-marcadagua.png';

export const MainLayout = styled.div`
  background-image: url(${logoMmarcadagua});
  background-repeat: no-repeat;
  background-size: 100%;
  width: 100%;
  height: 100%;

  background-color: #e5e5e5;

`;
export const ItemsPosition = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: 11rem;
  gap: 2rem;
`;

export const ForgotText = styled.div`
  color: #4c9515;
  font-family: "Josefin Sans", sans-serif;
  font-size: 3.875rem;
  font-weight: 600;
`;

export const InformText = styled.div`
  color: #4c9515;
  font-family: "Josefin Sans", sans-serif;
  font-size: 1.688rem;
  font-weight: 600;
`;

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

export const InputPosition = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

export const GreenKnob = styled.button`
  background-color: #217317;
  font-family: "Josefin Sans", sans-serif;
  font-weight: 300;
  font-size: 1.875rem;
  color: white;
  height: 4.688rem;
  width: 20rem;
  border: none;
  border-radius: 0.813rem;

  :hover {
    cursor: pointer;
    left: 0.563rem;
    transform: scale(1.1);
  }
`;
