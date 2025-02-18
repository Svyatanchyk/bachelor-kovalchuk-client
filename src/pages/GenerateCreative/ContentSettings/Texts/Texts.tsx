import { TextField } from "@mui/material";
import { StyledGeneratedTextBox } from "./styled";

type Props = {
  textVariations: Record<string, string>;
  handleChangeText: (key: string, value: string) => void;
};

const Texts = ({ textVariations, handleChangeText }: Props) => {
  return (
    <StyledGeneratedTextBox>
      {Object.entries(textVariations).map(([key, text]) => (
        <TextField
          type="text"
          onChange={(e) => handleChangeText(key, e.target.value)}
          value={text}
        />
      ))}
    </StyledGeneratedTextBox>
  );
};

export default Texts;
