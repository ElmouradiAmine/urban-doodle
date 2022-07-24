import { useState } from "react";
import Description from "../components/Description";
import Form from "../components/Form";
import Grid from "../components/Grid";
import { DEFAULT_GRID_SIZE } from "../constants";
import useForceUpdate from "../hooks/useForceUpdate";

const Home = () => {
  const [gridSize, setGridSize] = useState(DEFAULT_GRID_SIZE);
  const forceUpdate = useForceUpdate();

  const handleSubmit = (size: number): void => {
    setGridSize(size);
    forceUpdate(); // force update even if the size hasn't changed in the input
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col justify-center">
      <p className="font-logo text-white text-3xl lg:text-5xl lg:p-4 lg:-translate-y-6 text-center">
        <span className="text-blue-500">Fi</span>
        <span className="">zz</span>
        <span className="text-red-500">Bu</span>
        <span>zz</span>
      </p>
      <div className="flex items-center justify-center lg:space-x-8 lg:flex-row flex-col space-y-4 lg:space-y-12 px-4">
        <Grid size={gridSize} />
        <div className="flex flex-col space-y-6 lg:space-y-12">
          <Description />
          <Form onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default Home;
