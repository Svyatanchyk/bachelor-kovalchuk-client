import { StyledGeneratedTextBox, StyledTextElement } from "./styled";
import { TextType } from "../../../../context/types";

type Props = {
  textVariations: TextType;
};

const Texts = ({ textVariations }: Props) => {
  return (
    <StyledGeneratedTextBox>
      {Object.keys(textVariations).map((key) => (
        <StyledTextElement key={key}>
          {textVariations[Number(key)].join(" ").replace("*", "")}
        </StyledTextElement>
      ))}
    </StyledGeneratedTextBox>
  );
};

export default Texts;
