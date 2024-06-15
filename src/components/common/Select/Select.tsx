import { HTMLProps } from "react";
import "./Select.scss";

interface SelectProps extends HTMLProps<HTMLSelectElement> {
  children: React.ReactNode;
}

const Select = ({ children, ...props }: SelectProps) => {
  return (
    <select className="select" {...props}>
      {children}
    </select>
  );
};

export default Select;
