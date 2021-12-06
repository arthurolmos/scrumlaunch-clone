import React from "react";
import Particles from "react-tsparticles";
import { FaArrowDown } from "react-icons/fa";
import "./index.css";

interface Props {}

function Jumbotron(props: Props) {
  const particlesInit = (main: any) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container: any) => {
    console.log(container);
  };

  return (
    <div
      style={{
        width: "100%",
        height: window.innerHeight,
        margin: "0",
        padding: "0",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        height={`${window.innerHeight}px`}
        options={{
          background: {
            image: "linear-gradient(to right, #8980fe, lightblue)",
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 0,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
          fullScreen: false,
        }}
      />
      <div className="jumbotron">
        <div className="inner-jumbotron-container">
          <img src="logo_center.png" alt="Logo Center" width={100} />
          <div className="jumbotron-slider">
            <h1 className="jumbotron-h1">Millions of Users</h1>
          </div>
          <div className="jumbotron-separator" />
          <div className="jumbotron-separator" />
          <h2 className="jumbotron-h2">
            ScrumLaunch is a Los Angeles based product innovation studio. We
            work with leading brands and high growth startups to design and
            build great products.
          </h2>

          <div className="jumbotron-button">
            <h3 className="jumbotron-button-h3">The work</h3>
            <FaArrowDown style={{ marginLeft: 10 }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;
