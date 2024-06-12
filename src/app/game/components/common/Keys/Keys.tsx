import Key from "./components/Key/Key";
import "./keys.scss";

const Keys = () => {
  return (
    <div className="sequence">
      <Key keyboardKey="3" />
      <Key keyboardKey="A" />
      <Key keyboardKey="I" />
      <Key keyboardKey="J" />
      <Key keyboardKey="E" />
      <Key keyboardKey="F" />
    </div>
  );
};

export default Keys;
