import { getColorFromNumber } from "../utils";
import clsx from "clsx";

type BoxProps = {
  value: number;
};

const Box = ({ value }: BoxProps) => {
  const color = getColorFromNumber(value);
  return (
    <div
      className={clsx(
        "border border-white/30 h-7 w-7 md:h-10 md:w-10 lg:h-12 lg:w-12 flex items-center justify-center rounded",
        {
          "bg-yellow-500": color === "yellow",
          "bg-red-500": color === "red",
          "bg-green-500": color === "green",
        }
      )}
    >
      <p className="text-white text-sm md:text-base lg:text-lg">{value}</p>
    </div>
  );
};

export default Box;
