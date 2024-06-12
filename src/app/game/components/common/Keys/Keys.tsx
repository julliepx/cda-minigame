import { KeyboardKey } from "@/utils/keysGenerator";
import "./Keys.scss";
import Key from "./components/Key/Key";

interface KeysProps {
  keys: KeyboardKey[];
}

const Keys = ({ keys }: KeysProps) => {
  return (
    <div className="sequence">
      {keys?.map((key, index) => (
        <Key key={index} keyboardKey={key.code} isSuccess={key.isSuccess} />
      ))}
    </div>
  );
};

export default Keys;
