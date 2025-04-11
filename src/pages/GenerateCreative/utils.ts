import { generateCreativeParams } from "./creative";

export const distributeCreativeSettings = (
  numberOfTexts: number,
  object: Record<string, boolean>
): string[] => {
  const availableFormats = Object.entries(object)
    .filter(([_, isEnabled]) => isEnabled)
    .map(([key]) => key);

  if (availableFormats.length === 0) return [];

  const primaryFormat = availableFormats[0];
  const secondaryFormat = availableFormats[1] || primaryFormat;

  let result: string[] = [];

  if (numberOfTexts === 1) {
    return [primaryFormat];
  }

  const countPrimary = Math.ceil(numberOfTexts / 2);
  const countSecondary = numberOfTexts - countPrimary;

  for (let i = 0; i < countPrimary; i++) {
    result.push(primaryFormat);
  }
  for (let i = 0; i < countSecondary; i++) {
    result.push(secondaryFormat);
  }

  return result;
};

export interface generateCreativeSettingsParams extends generateCreativeParams {
  formats: string[];
  addImages: string[];
  addFlags: string[];
  addCtaArrows: string[];
  addCtaBtns: string[];
}

export const generateCreativeSettings = (
  params: generateCreativeSettingsParams
) => {
  const configurations = Object.entries(params.textVariations).map(
    ([, value], index) => ({
      vertical: params.vertical,
      format: params.formats[index],
      addImage: params.addImages[index],
      addFlag: params.addFlags[index],
      addCtaArrow: params.addCtaArrows[index],
      addCtaBtn: params.addCtaBtns[index],
      selectedCountry: params.selectedCountry,
      text: value,
    })
  );

  return configurations;
};

export const handleTextTransformation = (text: string) => {
  const regex = /\*(.*?)\*/g; // Regex to match text between asterisks (*)
  let result = [];
  let lastIndex = 0;

  let match;
  while ((match = regex.exec(text)) !== null) {
    // Push the text before the *wrapped* part
    if (match.index > lastIndex) {
      result.push(text.substring(lastIndex, match.index));
    }

    // Transform the *wrapped* text to uppercase
    const wrappedText = match[1].toUpperCase(); // Change to uppercase
    result.push(wrappedText); // Add the transformed text

    lastIndex = regex.lastIndex; // Update the last index
  }

  // Push the remaining text after the last match
  if (lastIndex < text.length) {
    result.push(text.substring(lastIndex));
  }

  return result;
};
