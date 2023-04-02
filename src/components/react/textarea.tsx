import { useEffect, useState } from "react";
import { Button } from "./button";

interface TextAreaProps {
  placeholder: string;
  value?: string;
  buttonText: string;
  callback: (text: string) => void;
}

const TextArea = ({
  placeholder,
  value,
  buttonText,
  callback,
}: TextAreaProps) => {
  const [text, setText] = useState("");

  useEffect(() => {
    if (value) {
      setText(value);
    }
  }, [value]);

  return (
    <>
      <textarea
        className="pt-4 inset-2 font-mono pl-4 block resize-none w-full md:h-[21.4rem] rounded mb-4 focus:outline-none focus:ring-2 focus:ring-black"
        name="link"
        id="link"
        placeholder={placeholder}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div>
        <Button name={buttonText} callback={() => callback(text)} />
      </div>
    </>
  );
};

export { TextArea };
