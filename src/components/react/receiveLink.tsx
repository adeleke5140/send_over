import { Button } from "./button";
import { TextArea } from "./textarea";

const ReceiveLink = () => {
  return (
    <div className="flex-1">
      <TextArea placeholder="Receive Link here..." />
      <div>
        <Button name="Copy" />
      </div>
    </div>
  );
};

export { ReceiveLink };
