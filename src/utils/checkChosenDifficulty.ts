export const checkChosenDifficulty = () => {
  const checkboxes = document.getElementsByName("difficulty");

  let difficulty: string[] = [];

  checkboxes.forEach((box) => {
    const checkbox = box as HTMLInputElement;
    if (checkbox.checked) {
      difficulty.push(checkbox.value);
    }
  });

  return difficulty;
};
