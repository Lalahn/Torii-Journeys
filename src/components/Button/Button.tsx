/* eslint-disable @typescript-eslint/no-explicit-any */
import "./Button.css";

const Button = ({
  text,
  onClick,
  type,
}: {
  text?: string;
  onClick?: (e: any) => any;
  type?: any;
}) => {
  return (
    <button className="button" onClick={onClick} type={type}>
      {text}
    </button>
  );
};

export default Button;
