export const checkChosenDifficulty = () => {
  const radioButtons = document.getElementsByName("difficulty");

  let difficulty = "";

  radioButtons.forEach((rBtn) => {
    const button = rBtn as HTMLInputElement;
    if (button.checked) {
      difficulty = button.value;
    }
  });
  return difficulty;
};
