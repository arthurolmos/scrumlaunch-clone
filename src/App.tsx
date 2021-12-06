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

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            padding: 10,
          }}
        >
          <a
            style={{
              color: "white",
              textDecoration: "none",
              textAlign: "center",
            }}
            href="https://github.com/arthurolmos/scrumlaunch-clone"
            target="_blank"
            rel="noreferrer"
          >
            View on GitHub!
          </a>
        </div>
      </MenuProvider>
    </div>
  );
}

export default App;
