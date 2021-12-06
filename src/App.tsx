import React from "react";
import { Animated } from "react-animated-css";
import { MenuProvider } from "./contexts/MenuContext";
import Header from "./components/header";
import Jumbotron from "./components/jumbotron";
import Welcome from "./components/welcome";
import Values from "./components/values";
import Testimonials from "./components/testimonials";

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

        <Animated
          animationIn="bounceInLeft"
          animationOut="fadeOut"
          isVisible={isVisible}
        >
          <div style={{ color: "white" }}>Some Text</div>
        </Animated>
        <div style={{ color: "white" }}>Hello</div>
        <h1 className="animate__animated animate__bounce">
          An animated element
        </h1>
        <button onClick={toggle}>Click</button>
      </MenuProvider>
    </div>
  );
}

export default App;
