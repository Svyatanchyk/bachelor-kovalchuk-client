import { StyledButton } from "./styled";

interface Props {
  text: string;
}

const Button = ({ text }: Props) => {
  return <StyledButton>{text}</StyledButton>;
};

export default Button;
