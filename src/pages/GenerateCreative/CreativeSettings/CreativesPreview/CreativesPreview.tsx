import { useCreativesContext } from "../../../../context/CreativesContext";
import { StyledCreativeImage, StyledCreativesPreviewWrapper } from "./styled";

interface Props {
  handleOpenEditor: () => void;
}

const CreativesPreview = ({ handleOpenEditor }: Props) => {
  const { creatives } = useCreativesContext();

  return (
    <StyledCreativesPreviewWrapper>
      {creatives.map((creative, index) => (
        <StyledCreativeImage
          onClick={handleOpenEditor}
          sx={{
            borderRadius: 2,
            height: 200,
            width: 250,
            cursor: "pointer",
            aspectRatio: 1 / 1,
          }}
          key={index}
          src={creative.image}
        />
      ))}
    </StyledCreativesPreviewWrapper>
  );
};

export default CreativesPreview;
