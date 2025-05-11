import { DialogActions } from "@mui/material";
import { StyledDialog, StyledDialogTitle } from "./styled";
import Button from "../Buttons/Button";

interface Props {
  isDialogOpen: boolean;
  handleClose: () => void;
  confirmAction: () => void;
}

const ConfirmDialog = ({ isDialogOpen, handleClose, confirmAction }: Props) => {
  return (
    <StyledDialog open={isDialogOpen} onClose={handleClose}>
      <StyledDialogTitle>
        Ви впевнені що хочете видалити акаунт?
      </StyledDialogTitle>
      <DialogActions sx={{ padding: 0 }}>
        <Button sx={{ paddingY: 1, fontSize: "0.9rem" }} onClick={handleClose}>
          Скасувати
        </Button>
        <Button
          sx={{ paddingY: 1, fontSize: "0.9rem" }}
          onClick={confirmAction}
        >
          Видалити
        </Button>
      </DialogActions>
    </StyledDialog>
  );
};

export default ConfirmDialog;
