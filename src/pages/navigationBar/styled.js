import styled from "styled-components";
import clipboardBackground from "./../../assets/navigationBarAssets/clipboardBackground.png";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import ArrowWhite from "./../../assets/menuAssets/ArrowWhite.png";
import asterisco from "./../../assets/navigationBarAssets/asterisco.png";

// NavigationBar

export const NavigationBarWrapper = styled.div`
  display: grid;
  grid-template-rows: 2.5fr 1fr 1fr;
  margin-top: -44rem;
  margin-left: 74rem;
`;

export const ArrowUp = styled.img`
  margin-left: 1.25rem;
  :hover {
    cursor: pointer;
  }
`;
export const ArrowDown = styled.img`
  margin-left: 1.25rem;
  :hover {
    cursor: pointer;
  }
`;

export const RoundBackground = styled.div`
  background-image: url(${clipboardBackground});
  background-repeat: no-repeat;
  background-size: 4rem;
  width: 4.688rem;
  height: 6rem;
  display: flex;
  align-items: center;
  margin-top: 3.438rem;
  :hover {
    cursor: pointer;
  }
`;

// MEssage Modal

export const Message = styled.img`
  margin-top: -1.875rem;
  margin-left: 1.25rem;
  height: 2.5rem;
  width: 1.563rem;
`;

export const ContainerMessage = styled.div`
  display: grid;
  justify-content: center;
  background-color: #c0c0c0;
`;

export const MessageTitle = styled.img`
  width: 2.813rem;
  height: 2.5rem;
  margin-top: 0.375rem;
  margin-bottom: 1.875rem;
  margin-left: 0.813rem;
`;

export const RoundBackgroundMessage = styled.div`
  background-image: url(${clipboardBackground});
  background-repeat: no-repeat;
  background-size: 4.5rem;
  width: 4.688rem;
  height: 6rem;
  display: flex;
  align-items: center;

  :hover {
    cursor: pointer;
  }
`;

export const DialogContentStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.625rem;
`;

export const DialogActionsStyle = styled(DialogActions)`
  background-color: #c0c0c0;
`;

export const DialogContentBackground = styled(DialogContent)`
  background-color: #c0c0c0;

  ::-webkit-scrollbar {
    width: 1.125rem;
    background-image: linear-gradient(#c0c0c0, #ffff);
    background-repeat: no-repeat;
    border-radius: 1.563rem;
  }
  /* ::-webkit-scrollbar-track{
    background-image: url(${ArrowWhite});
    background-repeat: no-repeat;
    margin-top: 200px;
  } */

  ::-webkit-scrollbar-thumb:hover {
    background-image: linear-gradient(#ffff, #c0c0c0);
    border-radius: 1.563rem;
  }
`;

export const ModalStyledButton = styled.button`
  font-family: Josefin Sans;
  font-size: 1.875rem;
  font-weight: 700;
  border: none;
  background-color: none;
  color: #fff;
  background-color: #c0c0c0;
  :hover {
    cursor: pointer;
  }
`;

export const InputData = styled.input`
  font-family: "Josefin Sans", sans-serif;
  font-weight: 400;
  font-size: 1.875rem;
  height: 4.25rem;
  width: 27.625rem;
  left: 56.188rem;
  border-radius: 0.813rem;
  outline: none;
  text-align: center;

  background-image: url(${asterisco});
  background-repeat: no-repeat;
  background-size: 3.875rem 6.875rem;
  background-position-x: 0.625rem;
  background-position-y: -1rem;
`;

export const InputMessage = styled.textarea`
  font-family: "Josefin Sans", sans-serif;
  padding-top: 1.25rem;
  font-weight: 400;
  font-size: 1.875rem;
  height: 11.25rem;
  width: 27.625rem;
  left: 56.125rem;
  border-radius: 0.813rem;
  outline: none;
  text-align: center;
`;

export const ButtonDialogContentStyle = styled.button`
  background-color: #217317;
  font-family: "Josefin Sans", sans-serif;
  font-weight: 300;
  font-size: 1.5rem;
  color: white;
  height: 2.688rem;
  width: 8rem;
  border: none;
  border-radius: 0.813rem;

  :hover {
    cursor: pointer;
    left: 0.563rem;
    transform: scale(1.1);
  }
`;
