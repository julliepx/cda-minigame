import { HTMLProps } from "react";
import "./Inputs.scss";

interface InputProps extends HTMLProps<HTMLInputElement> {
  label: string;
}

const Input = ({ label, ...props }: InputProps) => {
  return (
    <div className="input-field">
      <label htmlFor={props.id}>{label}</label>
      <input type="text" autoComplete="off" {...props} />
    </div>
  );
};

export default Input;
