import React from "react";
import favourites from "./../../assets/menuAssets/favourites.png";
import FavStar from "./../../assets/menuAssets/FavStar.png";
import Dialog from "@material-ui/core/Dialog";

import {
  Favourite,
  ContainerStar,
  StarTitle,
  DialogContentStyle,
  DialogActionsStyle,
  DialogContentBackground,
  ModalStyledButton,
  ButtonDialogContentStyle,
} from "./styled"



function Favourites() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Favourite
        src={favourites}
        variant="outlined"
        color="primary"
        onClick={handleClickOpen}
      />

      <Dialog
        open={open}
        onClose={handleClose}
        
      >
        <DialogActionsStyle>
          <ModalStyledButton onClick={handleClose}>X </ModalStyledButton>
        </DialogActionsStyle>

        <ContainerStar>
          <StarTitle src={FavStar} />
        </ContainerStar>

        <DialogContentBackground>
          <DialogContentStyle>
            <ButtonDialogContentStyle>Consumo de Água</ButtonDialogContentStyle>
            <ButtonDialogContentStyle>
              Consumo de Combustível
            </ButtonDialogContentStyle>
            <ButtonDialogContentStyle>Máquinas Ativas</ButtonDialogContentStyle>
            <ButtonDialogContentStyle>
              Unidades abertas
            </ButtonDialogContentStyle>
            <ButtonDialogContentStyle>
              Unidades abertas
            </ButtonDialogContentStyle>
            <ButtonDialogContentStyle>
              Unidades abertas
            </ButtonDialogContentStyle>
          </DialogContentStyle>
        </DialogContentBackground>
      </Dialog>
    </div>
  );
}

export default Favourites;
