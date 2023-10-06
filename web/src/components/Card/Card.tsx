import "./Card.css";
import { ContainerProps } from "../../types";

const Card: React.FC<ContainerProps> = ({ children }) => {
  return <div className="card-bg">{children}</div>;
};

export default Card;
