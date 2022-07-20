const Description = () => {
  return (
    <ul className="flex flex-col space-y-2 items-start">
      <li className="flex items-center justify-center space-x-2">
        <div className="rounded-full w-6 h-6 md:w-8 md:h-8 bg-red-500" />
        <p className="text-white/80 text-sm md:text-base">
          If the number is divisible by 3 colorize the box in red.
        </p>
      </li>
      <li className="flex items-center justify-center space-x-2">
        <div className="rounded-full w-6 h-6 md:w-8 md:h-8 bg-green-500" />
        <p className="text-white/80 text-sm md:text-base">
          If the number is divisible by 5 colorize the box in green.
        </p>
      </li>
      <li className="flex items-center justify-center space-x-2">
        <div className="rounded-full w-6 h-6 md:w-8 md:h-8 bg-yellow-500" />
        <p className="text-white/80 text-sm md:text-base">
          If the number is divisible by 3 and 5 colorize the box in yellow​.
        </p>
      </li>
    </ul>
  );
};

export default Description;
