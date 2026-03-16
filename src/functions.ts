export const truncateText = (text: string) => {
  return text.length > 150 ? text.substring(0, 150) : text;
};
