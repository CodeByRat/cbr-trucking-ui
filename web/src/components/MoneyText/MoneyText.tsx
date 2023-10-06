import { ContainerProps } from "../../types";
import "./MoneyText.css";

interface MoneyTextProps {
  value: number;
}

const MoneyText: React.FC<MoneyTextProps> = ({ value }) => {
  const positive = Math.sign(value) !== -1 ? true : false;
  console.log(value, positive);

  return (
    <span
      className={
        positive
          ? "money-text money-text__positive"
          : "money-text money-text__negative"
      }
    >
      ${value?.toLocaleString("en-US")}
    </span>
  );
};

export default MoneyText;
