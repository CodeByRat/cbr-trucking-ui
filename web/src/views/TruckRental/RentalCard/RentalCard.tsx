import Button from "../../../components/Button/Button";
import Card from "../../../components/Card/Card";
import MoneyText from "../../../components/MoneyText/MoneyText";
import "./RentalCard.css";
import hauler from "../../../images/hauler.png";
import { VehicleData } from "../../../types";

interface RentalCardProps {
  vehicleName: string;
  img: string;
  upgrades: VehicleData;
  costPerHour: number;
}

const formatObject = (obj: VehicleData) => {
  return Object.entries(obj)
    .map(
      ([key, value]) =>
        `${key.charAt(0).toUpperCase() + key.slice(1)} ${value.toUpperCase()}`
    )
    .join(", ");
};

const RentalCard: React.FC<RentalCardProps> = ({
  vehicleName,
  img,
  upgrades,
  costPerHour,
}) => {
  return (
    <Card>
      <img src={img} className="rental-img" />
      <article className="truck-info">
        <aside>
          <h3>{vehicleName}</h3>
          <p>{formatObject(upgrades)}</p>
          <p className="weight-text">Tow Capacity 80,000</p>
        </aside>
        <section className="rental-info">
          <div className="cost-info-text">
            <MoneyText value={costPerHour} /> / hr
          </div>
          <Button color="green">RENT</Button>
        </section>
      </article>
    </Card>
  );
};

export default RentalCard;
