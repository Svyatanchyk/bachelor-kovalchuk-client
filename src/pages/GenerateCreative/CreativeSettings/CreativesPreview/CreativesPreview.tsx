import { useCreativesContext } from "../../../../context/CreativesContext";
import { StyledCreativeImage, StyledCreativesPreviewWrapper } from "./styled";

interface Props {
  handleOpenEditor: () => void;
}

const CreativesPreview = ({ handleOpenEditor }: Props) => {
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
          isActive={index === activeCreative}
          onClick={() => handleClickCreative(index)}
          key={index}
          src={creative.image}
        />
      ))}
    </StyledCreativesPreviewWrapper>
  );
};

export default CreativesPreview;
