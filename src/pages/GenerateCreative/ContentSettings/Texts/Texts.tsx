import { StyledGeneratedTextBox, StyledTextElement } from "./styled";
import { TextType } from "../../../../context/types";

type Props = {
  textVariations: TextType;
};

const Texts = ({ textVariations }: Props) => {
  console.log(textVariations);

  const transformedText = Object.keys(textVariations).map((key) =>
    textVariations[Number(key)].join(" ").replace(/\*/g, "")
  );

  console.log(transformedText);

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
