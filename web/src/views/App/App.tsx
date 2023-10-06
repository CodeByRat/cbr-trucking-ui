import React, { useState } from "react";
import "./App.css";
import { debugData } from "../../utils/debugData";
import { fetchNui } from "../../utils/fetchNui";
import useMenuData from "./hooks/useMenuData";
import TruckRental from "../TruckRental/TruckRental";

const toTitleCase = (input: string): string => {
  return input
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const views: { [key: string]: React.FC | undefined } = {
  "truck-rental": TruckRental,
};

const App: React.FC = () => {
  const { menuType } = useMenuData();

  const Menu = views[menuType ?? ""] || null;

  return (
    <div className="nui-wrapper">
      <section className="app-window">
        <header className="app-header">
          <h1>{toTitleCase(menuType || "menu")}</h1>
        </header>
        {Menu ? <Menu /> : null}
      </section>
    </div>
  );
};

export default App;
