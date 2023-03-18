import { useEffect, useState } from "react";

const TextArea = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    navigator.clipboard.readText().then((content) => setText(content));
  }, []);

  return (
    <textarea
      className="pt-4 inset-2 font-mono pl-4 block resize-none w-full h-72 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-black"
      name="link"
      id="link"
      placeholder="Paste link here..."
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
  );
};

export { TextArea };
