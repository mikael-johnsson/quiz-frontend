export const checkChosenDifficulty = () => {
  const checkboxes = document.getElementsByName("difficulty");

  let difficulties: string[] = [];

  checkboxes.forEach((box) => {
    const checkbox = box as HTMLInputElement;
    if (checkbox.checked) {
      difficulties.push(checkbox.value);
    }
  });

  return difficulties;
};
