import { ContainerProps } from "../../types";
import "./Button.css";

interface ButtonProps extends ContainerProps {
  color: string;
}

const Button: React.FC<ButtonProps> = ({ children, color }) => {
  return <button className={`button button__${color}`}>{children}</button>;
};

export default Button;
