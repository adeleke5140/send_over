import "./button.module.css";

interface ButtonProps {
  name: string;
  callback?: () => void;
}

const Button = ({ name, callback }: ButtonProps) => {
  return (
    <button
      type="button"
      className="px-24 text-xl uppercase font-semibold tracking-wide py-8 text-white relative cursor-pointer bold border-transparent"
      onClick={callback}
    >
      <span className="border-black border-2 border-solid rounded"></span>
      <span className="border-black border-2 border-solid rounded"></span>
      <span className="border-black border-2 border-solid rounded">{name}</span>
    </button>
  );
};

export { Button };
