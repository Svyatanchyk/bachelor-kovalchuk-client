import { DialogActions } from "@mui/material";
import { StyledDialog, StyledDialogTitle } from "./styled";
import Button from "../Buttons/Button";
import { ReactNode } from "react";

interface Props {
  title: string;
  children?: ReactNode;
  isDialogOpen: boolean;
  handleClose: () => void;
  confirmAction: () => void;
}

const ConfirmDialog = ({
  isDialogOpen,
  handleClose,
  confirmAction,
  title,
  children,
}: Props) => {
  return (
    <StyledDialog open={isDialogOpen} onClose={handleClose}>
      <StyledDialogTitle>{title}</StyledDialogTitle>
      {children}
      <DialogActions sx={{ padding: 0 }}>
        <Button sx={{ paddingY: 1, fontSize: "0.9rem" }} onClick={handleClose}>
          Скасувати
        </Button>
        <Button
          sx={{ paddingY: 1, fontSize: "0.9rem" }}
          onClick={confirmAction}
        >
          Підтвердити
        </Button>
      </DialogActions>
    </StyledDialog>
  );
};

export default ConfirmDialog;
