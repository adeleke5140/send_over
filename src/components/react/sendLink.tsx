import { Button } from "./button";
import { TextArea } from "./textarea";

interface SendLinkProps {
  link: string;
}

const SendLink = ({ link }: SendLinkProps) => {
  return (
    <div className="flex-1">
      <TextArea placeholder="Paste link here..." value={link} />
      <div>
        <Button name="send" />
      </div>
    </div>
  );
};

export { SendLink };
