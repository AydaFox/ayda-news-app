export const dateFormatter = (date) => {
  if (!date) return "";
  const articleDateArr = date.toString().split("T");
  return `${articleDateArr[0]} ${articleDateArr[1].slice(0, 5)}`;
};
