import { ReactNode } from "react";
import { StyledButton } from "./styled";
import { SxProps } from "@mui/material";

interface Props {
  children: ReactNode;
  onClick: () => void;
  sx?: SxProps;
}

const Button = ({ children, onClick, sx }: Props) => {
  return (
    <StyledButton sx={sx} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
