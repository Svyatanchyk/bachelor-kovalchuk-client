import { ReactNode } from "react";
import { StyledButton } from "./styled";
import { SxProps } from "@mui/material";

interface Props {
  children: ReactNode;
  onClick: () => void;
  sx?: SxProps;
  disabled?: boolean;
}

const Button = ({ children, onClick, disabled, sx }: Props) => {
  return (
    <StyledButton sx={sx} onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

export default Button;
