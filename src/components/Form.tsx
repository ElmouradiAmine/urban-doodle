import { useState } from "react";
import { DEFAULT_GRID_SIZE } from "../constants";

type FormProps = {
  onSubmit: (size: number) => void;
};

const Form = ({ onSubmit }: FormProps) => {
  const [size, setSize] = useState(DEFAULT_GRID_SIZE);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(size);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSize(Number(e.target.value));
  };

  return (
    <form className="flex space-x-4 justify-center" onSubmit={handleSubmit}>
      <input
        type="number"
        className="bg-slate-900 text-white py-2 pl-4 w-16 border border-white/30 rounded outline-none text-sm md:text-base"
        id="size"
        value={size}
        onChange={handleChange}
      />
      <button
        type={"submit"}
        className="bg-blue-500 py-1 px-2 md:py-2 md:px-4 rounded text-white font-semibold hover:opacity-90 active:translate-y-1 transition-all text-sm md:text-base"
      >
        Generate
      </button>
    </form>
  );
};

export default Form;
