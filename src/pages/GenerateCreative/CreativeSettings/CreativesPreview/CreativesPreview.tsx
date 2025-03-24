import { useCreativesContext } from "../../../../context/CreativesContext";
import {
  CreativeCard,
  StyledActions,
  StyledCardButton,
  StyledCreativeImage,
  StyledCreativesPreviewWrapper,
} from "./styled";

interface Props {
  handleOpenEditor: () => void;
  isChangeble?: boolean;
}

const CreativesPreview = ({ handleOpenEditor, isChangeble = false }: Props) => {
  const { creatives, setActiveCreative, activeCreative, setCreatives } =
    useCreativesContext();

  const handleClickCreative = (creativeIndex: number) => {
    setActiveCreative(creativeIndex);
    handleOpenEditor();
  };

  const handleDeleteCreative = (creativeIndex: number) => {
    const newCreatives = creatives.filter(
      (_, index) => index !== creativeIndex
    );

    setCreatives(newCreatives);
  };

  return (
    <StyledCreativesPreviewWrapper>
      {creatives.map((creative, index) => (
        <CreativeCard
          isActive={index === activeCreative && isChangeble}
          key={index}
        >
          <StyledActions className="styledActions">
            <StyledCardButton
              onClick={() => handleClickCreative(index)}
              variant="outlined"
            >
              View
            </StyledCardButton>
            <StyledCardButton
              onClick={() => handleDeleteCreative(index)}
              variant="outlined"
            >
              Delete
            </StyledCardButton>
          </StyledActions>

          <StyledCreativeImage src={creative.image} />
        </CreativeCard>
      ))}
    </StyledCreativesPreviewWrapper>
  );
};

export default CreativesPreview;
