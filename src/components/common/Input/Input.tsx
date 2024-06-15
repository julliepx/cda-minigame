import { HTMLProps } from "react";
import "./Inputs.scss";

interface InputProps extends HTMLProps<HTMLInputElement> {
  label: string;
  hint: string;
}

const Input = ({ label, hint, ...props }: InputProps) => {
  return (
    <div className="input-container">
      <div className="input-field">
        <label htmlFor={props.id}>{label}</label>
        <input type="text" autoComplete="off" {...props} />
      </div>
      <span className="hint">
        O usuário será utilizado apenas para fins da exibição de ranking*
      </span>
    </div>
  );
};

export default Input;
