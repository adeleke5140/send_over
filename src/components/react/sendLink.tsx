import { TextArea } from "./textarea";
import { supabase } from "../../supabase/init";

interface SendLinkProps {
  link: string;
}

const SendLink = ({ link }: SendLinkProps) => {
  const sendData = async (value: string) => {
    const { data, error } = await supabase
      .from("links")
      .insert({ link: value });
  };

  return (
    <form className="flex-1">
      <TextArea
        placeholder="Paste link here..."
        value={link}
        buttonText="send"
        callback={sendData}
      />
    </form>
  );
};

export { SendLink };
