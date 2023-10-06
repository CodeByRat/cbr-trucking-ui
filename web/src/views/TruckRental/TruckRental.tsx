import "./TruckRental.css";
import RentalCard from "./RentalCard/RentalCard";
import hauler from "../../images/hauler.png";

interface TruckRentalProps {
  img: string;
}

const TruckRental: React.FC<TruckRentalProps> = ({ img }) => {
  return (
    <section className="truck-rental">
      <RentalCard
        vehicleName="Jobuilt Hauler"
        img={hauler}
        upgrades={{
          brakes: "d",
          chassis: "d",
          engine: "d",
          tires: "a",
        }}
        costPerHour={1000}
        towCapacity={80000}
      />
    </section>
  );
};

export default TruckRental;
