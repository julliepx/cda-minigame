import "./Key.scss";

interface KeyProps {
  keyboardKey: string;
  isSuccess?: boolean;
}

const Key = ({ keyboardKey, isSuccess = false }: KeyProps) => {
  return (
    <div className={`key ${isSuccess ? "success" : ""}`}>{keyboardKey}</div>
  );
};

export default Key;
