export const changeToUpperCase = (title) => {
  return title
    .split(" ")
    .map((element) => {
      return element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
    })
    .join(" ");
};
