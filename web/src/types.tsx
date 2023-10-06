import { ReactNode } from "react";

type upgradeClass = "d" | "c" | "b" | "a" | "s";

export interface ContainerProps {
  children: ReactNode;
}

export interface VehicleData {
  brakes: upgradeClass;
  chassis: upgradeClass;
  engine: upgradeClass;
  tires: upgradeClass;
}
