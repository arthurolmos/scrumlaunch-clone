import React from "react";
import { MenuProvider } from "./contexts/MenuContext";
import Header from "./components/header";
import Jumbotron from "./components/jumbotron";
import Welcome from "./components/welcome";
import Values from "./components/values";
import Testimonials from "./components/testimonials";
import Services from "./components/services";

function App() {
  return (
    <div>
      <MenuProvider>
        <Header />

        <Jumbotron />

        <Welcome />

        <Values />

        <Testimonials />

        <Services />
      </MenuProvider>
    </div>
  );
}

export default App;
