import { useState } from "react";
import Description from "./components/Description";
import Form from "./components/Form";
import Grid from "./components/Grid";
import { DEFAULT_GRID_SIZE } from "./constants";
import useForceUpdate from "./hooks/useForceUpdate";

const App = () => {
  const [gridSize, setGridSize] = useState(DEFAULT_GRID_SIZE);
  const forceUpdate = useForceUpdate();

  const handleSubmit = (size: number): void => {
    setGridSize(size);
    forceUpdate(); // force update even if the size hasn't changed in the input
  };

  return (
    <div className="h-screen bg-gray-900 flex items-center justify-center lg:space-x-8 lg:flex-row flex-col space-y-4 lg:space-y-12 p-4">
      <Grid size={gridSize} />
      <div className="flex flex-col space-y-6 lg:space-y-12">
        <Description />
        <Form onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default App;
