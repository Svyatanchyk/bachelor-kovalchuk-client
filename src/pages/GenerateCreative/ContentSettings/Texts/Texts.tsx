import { StyledGeneratedTextBox, StyledTextElement } from "./styled";
import { TextType } from "../../../../context/types";

type Props = {
  textVariations: TextType;
};

const Texts = ({ textVariations }: Props) => {
  const transformedText = Object.keys(textVariations).map((key) =>
    textVariations[Number(key)].join(" ").replace(/\*/g, "")
  );

  return (
    <StyledGeneratedTextBox>
      {Object.keys(transformedText).map((key) => (
        <StyledTextElement key={key}>
          {transformedText[Number(key)]}
        </StyledTextElement>
      ))}
    </StyledGeneratedTextBox>
  );
};

export default Texts;
