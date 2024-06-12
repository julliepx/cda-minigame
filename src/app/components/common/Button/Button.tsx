import { HTMLProps } from "react";
import AltaButtonFrame from "../../svgs/alta/AltaButtonFrame/AltaButtonFrame";
import "./Button.scss";

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  title: string;
  hasFrame?: boolean;
  type?: "button" | "submit" | "reset";
}

const Button = ({
  title,
  hasFrame,
  type = "button",
  ...props
}: ButtonProps) => {
  return (
    <div className="button-container">
      <button {...props} type={type}>
        {title}
        {hasFrame && <AltaButtonFrame />}
      </button>
    </div>
  );
};

export default Button;
