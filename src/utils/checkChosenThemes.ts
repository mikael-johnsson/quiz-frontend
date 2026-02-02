export const checkChosenThemes = () => {
  let themes: string[] = [];
  const select = document.getElementById(
    "themes-dropdown",
  ) as HTMLSelectElement;

  for (let option of select.options) {
    if (option.selected) {
      themes.push(option.value);
    }
  }

  return themes;
};
