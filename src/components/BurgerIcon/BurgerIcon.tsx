import MenuIcon from "@mui/icons-material/Menu";
import { StyledIconButton } from "./styled";

interface Props {
  handleOpen: () => void;
}

const BurgerIcon = ({ handleOpen }: Props) => {
  return (
    <StyledIconButton onClick={handleOpen}>
      <MenuIcon fontSize="large" />
    </StyledIconButton>
  );
};

export default BurgerIcon;
