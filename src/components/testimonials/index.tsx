import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { IoCloseOutline } from "react-icons/io5";
import "./index.css";

interface Props {}

function Testimonials(props: Props) {
  const values = [
    '"ScrumLaunch rapidly accelerated our product development cycle and allowed us to launch a very popular new product for our clients." - Matt @ Gipper',
    '"The ScrumLaunch team was essential to scaling our product to thousands of users. They helped build a responsive UI using angular and a powerful video transcoding engine" - Jeff @ vLoop',
    '"They build great products very quickly and their scrum process makes everything very transparent along the way." - Ryan @ Modular11',
  ];

  const [active, setActive] = React.useState(0);
  const [isScrolling, setScrolling] = React.useState(false);

  const ref = React.useRef<HTMLDivElement>(null);

  const width = 900;
  const translate = -width * active;

  React.useEffect(() => {
    if (isScrolling) return;

    setTimeout(
      () => {
        setScrolling(true);

        const index = active < values.length - 1 ? active + 1 : 0;

        setActive(index);

        setScrolling(false);
      },

      3000
    );

    return () => clearTimeout();
  }, [isScrolling, values.length, active]);

  // React.useEffect(() => {
  //   console.log({ isScrolling });
  // }, [isScrolling]);

  return (
    <div className="testimonials-container">
      <IoCloseOutline color="white" size={20} />
      <h4 className="testimonials-h4">Testimonials</h4>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          overflow: "hidden",
          width: width,
        }}
        onMouseOver={() => setScrolling(true)}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            transform: `translate(${translate}px)`,
            transition: "all .5s ease-in-out",
          }}
        >
          {values.map((item, index) => {
            return (
              <div
                style={{
                  color: "white",
                  flex: 1,
                  display: "flex",
                  minWidth: width,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                ref={ref}
                key={index}
              >
                <h5 className="testimonials-h5">{item}</h5>
              </div>
            );
          })}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 15,
        }}
      >
        {values.map((item, index) => {
          return (
            <div
              style={{
                border: "1px solid #8980fe",
                backgroundColor: active === index ? "#8980fe" : "transparent",
                borderRadius: 50,
                width: 10,
                height: 10,
                cursor: "pointer",
              }}
              onClick={() => setActive(index)}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Testimonials;
