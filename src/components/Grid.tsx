import { generateGrid } from "../utils";
import Box from "./Box";

const grid = generateGrid(10);

export const Grid = () => {
  return (
    <div className="grid grid-cols-8 sm:grid-cols-10 gap-2">
      {grid.map((value) => (
        <Box value={value} />
      ))}
    </div>
  );
};
