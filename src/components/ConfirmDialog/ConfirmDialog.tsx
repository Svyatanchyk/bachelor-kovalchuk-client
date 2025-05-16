import { DialogTitle } from "@mui/material";
import { StyledDialog, StyledDialogTypography } from "./styled";
import { ReactNode } from "react";

interface Props {
  title: string;
  children?: ReactNode;
  isDialogOpen: boolean;
  handleClose: () => void;
}

const ConfirmDialog = ({
  isDialogOpen,
  handleClose,
  title,
  children,
}: Props) => {
  return (
    <StyledDialog open={isDialogOpen} onClose={handleClose}>
      <DialogTitle>
        <StyledDialogTypography>{title}</StyledDialogTypography>
      </DialogTitle>

      {children}
    </StyledDialog>
  );
};

export default ConfirmDialog;
