import Description from "./components/Description";
import { Grid } from "./components/Grid";

const App = () => {
  return (
    <div className="h-screen bg-gray-900 flex items-center justify-center lg:space-x-8 lg:flex-row flex-col space-y-12 p-4">
      <Grid />
      <Description />
    </div>
  );
};

export default App;
