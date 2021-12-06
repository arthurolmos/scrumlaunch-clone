import React from "react";
import "./index.css";

interface Props {}

function Welcome(props: Props) {
  const ref = React.useRef<HTMLDivElement>(null);

  const [visible, setVisible] = React.useState(false);

  const onScroll = () => {
    const topPosition = ref?.current?.getBoundingClientRect().top;

    if (topPosition) {
      const scrollPosition = window.scrollY + window.innerHeight - 300;

      if (topPosition < scrollPosition) {
        setVisible(true);
      }
    }
  };

  const show = React.useMemo(() => (visible ? "visible" : ""), [visible]);

  React.useLayoutEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="container" ref={ref}>
      <div className="inner-welcome-container">
        <div className="hello-container">
          <h2 className={`hello-h2 ${show}`}>Hello.</h2>
        </div>
        <div>
          <h3 className={`hello-h3 ${show}`}>
            We specialize in web and mobile software applications that can scale
            to millions of users. Customer centric design and development is our
            DNA.
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
