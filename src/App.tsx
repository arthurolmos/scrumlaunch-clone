import React from "react";
import { Animated } from "react-animated-css";
import { MenuProvider } from "./contexts/MenuContext";
import Header from "./components/header";
import Jumbotron from "./components/jumbotron";
import Welcome from "./components/welcome";
import Values from "./components/values";
import Testimonials from "./components/testimonials";
import Services from "./components/services";

function App() {
  const [isVisible, setVisible] = React.useState(false);
  const toggle = () => setVisible(!isVisible);

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
