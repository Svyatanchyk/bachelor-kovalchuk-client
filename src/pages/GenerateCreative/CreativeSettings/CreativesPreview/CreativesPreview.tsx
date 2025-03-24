import { useCreativesContext } from "../../../../context/CreativesContext";
import { StyledCreativeImage, StyledCreativesPreviewWrapper } from "./styled";

interface Props {
  handleOpenEditor: () => void;
  isChangeble?: boolean;
}

const CreativesPreview = ({ handleOpenEditor, isChangeble = false }: Props) => {
  const { creatives, setActiveCreative, activeCreative } =
    useCreativesContext();

  const handleClickCreative = (creativeIndex: number) => {
    setActiveCreative(creativeIndex);
    handleOpenEditor();
  };

  return (
    <StyledCreativesPreviewWrapper>
      {creatives.map((creative, index) => (
        <StyledCreativeImage
          isActive={index === activeCreative && isChangeble}
          onClick={() => handleClickCreative(index)}
          key={index}
          src={creative.image}
        />
      ))}
    </StyledCreativesPreviewWrapper>
  );
};

export default CreativesPreview;
