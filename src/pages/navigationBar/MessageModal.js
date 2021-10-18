import React from "react";
import clipboard from "./../../assets/navigationBarAssets/clipboard.png";
import Dialog from "@material-ui/core/Dialog";

import {
  Message,
  ContainerMessage,
  MessageTitle,
  RoundBackgroundMessage,
  DialogContentStyle,
  DialogActionsStyle,
  DialogContentBackground,
  ModalStyledButton,
  InputData,
  InputMessage,
  ButtonDialogContentStyle,
} from "./styled";

function MessageContainer() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Message
        src={clipboard}
        variant="outlined"
        color="primary"
        onClick={handleClickOpen}
      />

      <Dialog open={open} onClose={handleClose}>
        <DialogActionsStyle>
          <ModalStyledButton onClick={handleClose}>X </ModalStyledButton>
        </DialogActionsStyle>

        <ContainerMessage>
          <RoundBackgroundMessage>
            <MessageTitle src={clipboard} />
          </RoundBackgroundMessage>
        </ContainerMessage>

        <DialogContentBackground>
          <DialogContentStyle>
            <InputData type="text" placeholder="Nome:" />
            <InputData type="text" placeholder="WhatsApp com DDD:" />
            <InputData type="text" placeholder="E-mail:" />
            <InputData type="text" placeholder="Empresa/Cargo:" />
            <InputMessage type="text" placeholder="Mensagem:" />

            <ButtonDialogContentStyle>ENVIAR</ButtonDialogContentStyle>
          </DialogContentStyle>
        </DialogContentBackground>
      </Dialog>
    </div>
  );
}

export default MessageContainer;
