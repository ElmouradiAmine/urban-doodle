import Menu from "./components/Menu";
import AboutMe from "./screens/AboutMe";
import Home from "./screens/Home";

const App = () => {
  return (
    <div className="flex flex-col">
      <Home />
      <AboutMe />
      <Menu />
    </div>
  );
};

export default App;
