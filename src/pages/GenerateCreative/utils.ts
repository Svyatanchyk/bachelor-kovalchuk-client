export const configCreativeFormats = (
  numberOfTexts: number,
  creativeFormats: Record<string, boolean>
): string[] => {
  const availableFormats = Object.entries(creativeFormats)
    .filter(([_, isEnabled]) => isEnabled)
    .map(([key]) => key);

  if (availableFormats.length === 0) return [];

  const primaryFormat = availableFormats[0];
  const secondaryFormat = availableFormats[1] || primaryFormat;

  let result: string[] = [];

  console.log("Should work1");

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
