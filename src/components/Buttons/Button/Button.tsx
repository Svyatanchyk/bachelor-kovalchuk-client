import { ReactNode } from "react";
import { StyledButton } from "./styled";
import { SxProps } from "@mui/material";

interface Props {
  children: ReactNode;
  onClick?: () => void;
  sx?: SxProps;
  disabled?: boolean;
  type?: "button" | "submit";
}

const Button = ({ children, onClick, disabled, type, sx }: Props) => {
  return (
    <StyledButton type={type} sx={sx} onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

export default Button;
