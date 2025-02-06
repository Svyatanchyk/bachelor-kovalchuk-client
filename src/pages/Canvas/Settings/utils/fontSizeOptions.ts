export const FONT_SIZE_OPTIONS = Array.from(
  { length: (150 - 6) / 2 + 1 },
  (_, i) => ({
    id: i + 1,
    fontSize: 6 + i * 2,
    label: `${6 + i * 2}px`,
  })
);
