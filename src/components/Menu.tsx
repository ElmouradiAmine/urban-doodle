const Menu = () => {
  return (
    <div
      className="fixed text-white top-1/2 left-0 -translate-y-24 rotate-90 -space-x-1"
      style={{
        transformOrigin: "30% 0 0",
      }}
    >
      <button
        className="bg-green-500 p-2 w-16 md:w-24 rounded text-sm md:text-base"
        onClick={() => {
          window.scroll({ top: 0, behavior: "smooth" });
        }}
      >
        Home
      </button>
      <button
        className="bg-blue-500 p-2 w-16 md:w-24 rounded text-sm md:text-base"
        onClick={() => {
          window.scroll({ top: window.innerHeight, behavior: "smooth" });
        }}
      >
        About
      </button>
    </div>
  );
};

export default Menu;
