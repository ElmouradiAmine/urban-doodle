import { generateGrid } from "../utils";
import Box from "./Box";

type GridProps = {
  size: number;
};

const Grid = ({ size }: GridProps) => {
  const grid = generateGrid(size);

  return (
    <div className="grid grid-cols-8 sm:grid-cols-10 lg:grid-cols-12  gap-2 max-h-[75vh] overflow-y-auto m-4">
      {grid.map((value, index) => (
        <Box key={index} value={value} />
      ))}
    </div>
  );
};

export default Grid;
