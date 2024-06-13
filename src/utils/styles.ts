export const setRootStyleProperty = (property: string, value: string) => {
  document.documentElement.style.setProperty(property, value);
};
