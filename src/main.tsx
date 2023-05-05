import React from "react";
import ReactDOM from "react-dom/client";
import { AppRouter } from "./AppRouter";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div className="flex flex-col w-full h-full bg-[#000212]">
      <NavBar />
      <AppRouter />
      <Footer />
    </div>
  </React.StrictMode>
);
