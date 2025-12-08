export const checkChoseThemes = () => {
  let selectedThemes: string[] = [];
  const select = document.getElementById(
    "themes-dropdown"
  ) as HTMLSelectElement;

  for (let option of select.options) {
    if (option.selected) {
      selectedThemes.push(option.value);
    }
  }

  return selectedThemes;
};
