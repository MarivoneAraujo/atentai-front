import styled from "styled-components";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import ArrowWhite from "./../../assets/menuAssets/ArrowWhite.png";

export const DashboardWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 4fr 1fr;
  margin-left: 30px;
  gap: 25px;
  width: 100px;
  justify-content: right;
`;

export const Dashboard = styled.img`
  :hover {
    cursor: pointer;
    background-color: #fff;
    padding: 5px;
  }
`;

export const Reports = styled.img`
  display: flex;
  margin-left: 5px;
  :hover {
    cursor: pointer;
    background-color: #fff;
    padding: 2px;
  }
`;
export const Warnings = styled.img`
  display: flex;
  margin-left: -4px;
  :hover {
    cursor: pointer;
    background-color: #fff;
    padding: 2px;
  }
`;
export const Configurations = styled.img`
  display: flex;
  :hover {
    cursor: pointer;
    background-color: #fff;
  }
`;

// Favourites

export const Favourite = styled.img`
  :hover {
    cursor: pointer;
    background-color: #fff;
    padding: 2px;
  }
`;

export const ContainerStar = styled.div`
  display: grid;
  justify-content: center;
  background-color: #c0c0c0;
`;

export const StarTitle = styled.img`
  width: 61px;
  height: 58px;
  margin-top: 5px;
  margin-bottom: 30px;
`;

export const DialogContentStyle = styled.div`
  background-color: #c0c0c0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const DialogActionsStyle = styled(DialogActions)`
  background-color: #c0c0c0;
`;

export const DialogContentBackground = styled(DialogContent)`
  background-color: #c0c0c0;

  ::-webkit-scrollbar {
    width: 18px;
    background-image: linear-gradient(#c0c0c0, #ffff);
    background-repeat: no-repeat;
    border-radius: 25px;
  }
  /* ::-webkit-scrollbar-track{
    background-image: url(${ArrowWhite});
    background-repeat: no-repeat;
    margin-top: 200px;
  } */

  ::-webkit-scrollbar-thumb:hover {
    background-image: linear-gradient(#ffff, #c0c0c0);
    border-radius: 25px;
  }
`;

export const ModalStyledButton = styled.button`
  font-family: Josefin Sans;
  font-size: 30px;
  font-weight: 700;
  border: none;
  background-color: none;
  color: #fff;
  background-color: #c0c0c0;
  :hover {
    cursor: pointer;
  }
`;

export const ButtonDialogContentStyle = styled.button`
  font-family: "Josefin Sans", sans-serif;
  color: #00000066;
  font-size: 30px;
  font-weight: 400;
  height: 68px;
  width: 378.9787902832031px;
  left: 304.4412841796875px;
  border: none;
  border-radius: 13px;
  margin-left: 6px;
  background-color: #fff;
  :hover {
    cursor: pointer;
  }
`;
