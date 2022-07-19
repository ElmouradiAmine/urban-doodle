export const generateGrid = (size: number): number[] => {
  const grid = [];
  for (let i = 0; i < size; i++) {
    for (let i = 0; i < size; i++) {
      grid.push(generateNumber(1, 100));
    }
  }
  return grid;
};

export const generateNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min) + min);
};

export const getColorFromNumber = (num: number) => {
  if (num % 3 === 0 && num % 5 === 0) return "yellow";
  if (num % 3 === 0) return "red";
  if (num % 5 === 0) return "green";
};
