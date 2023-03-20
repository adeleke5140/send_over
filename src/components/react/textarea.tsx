import { useEffect, useState } from "react";

interface TextAreaProps {
  placeholder: string;
}

const TextArea = ({ placeholder }: TextAreaProps) => {
  const [text, setText] = useState("");

  // useEffect(() => {
  //   navigator.clipboard.readText().then((content) => setText(content));
  // }, []);

  return (
    <textarea
      className="pt-4 inset-2 font-mono pl-4 block resize-none w-full h-[21.4rem] rounded mb-4 focus:outline-none focus:ring-2 focus:ring-black"
      name="link"
      id="link"
      placeholder={placeholder}
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
  );
};

export { TextArea };
