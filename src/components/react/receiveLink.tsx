import { useEffect, useState } from "react";
import { supabase } from "../../supabase/init";
import { TextArea } from "./textarea";

const ReceiveLink = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    supabase
      .channel("links")
      .on("postgres_changes", { event: "*", schema: "*" }, (data) => {
        const newValue = data.new.link;
        setText(newValue);
      })
      .subscribe();
  }, []);

  return (
    <div className="flex-1">
      <TextArea
        placeholder="Receive Link here..."
        buttonText="Copy"
        value={text}
        callback={() => ""}
      />
    </div>
  );
};

export { ReceiveLink };
