import { Button } from "./button";
import { TextArea } from "./textarea";

const SendLink = () => {
  return (
    <div className="flex-1">
      <TextArea placeholder="Paste link here..." />
      <div>
        <Button name="send" />
      </div>
    </div>
  );
};

export { SendLink };
