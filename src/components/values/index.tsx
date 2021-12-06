import React from "react";
import "./index.css";
import {
  IoDiamondOutline,
  IoPeopleOutline,
  IoRocketOutline,
} from "react-icons/io5";

interface Props {}

function Values(props: Props) {
  const values: {
    icon: React.ReactNode;
    title: string;
    description: string;
  }[] = [
    {
      icon: <IoPeopleOutline color="#8980fe" size={90} />,
      title: "Effective Communication",
      description:
        "Our scrum approach places a heavy empahsis on daily communication, user stories and rapid feedback.",
    },
    {
      icon: <IoDiamondOutline color="#8980fe" size={90} />,
      title: "Prototyping & Customer Research",
      description:
        "We place a heavy emphasis on design sprints, customer validation and user analytics.",
    },
    {
      icon: <IoRocketOutline color="#8980fe" size={90} />,
      title: "Quality Software Development & QA",
      description:
        "We believe in using the most modern technology, emphasizing QA automation and a discpilined deployment process",
    },
  ];

  const ref = React.useRef<HTMLDivElement>(null);

  const [visible, setVisible] = React.useState(false);

  const onScroll = () => {
    const topPosition = ref?.current?.getBoundingClientRect().top;

    if (topPosition) {
      const scrollPosition = window.scrollY + window.innerHeight - 1200;
      console.log(
        "values",
        "top",
        topPosition,
        // "y",
        // window.scrollY,
        // "inner",
        // window.innerHeight,
        "scroll",
        scrollPosition
      );

      if (topPosition < scrollPosition) {
        console.log("here");
        setVisible(true);
      }
    }
  };

  const show = visible ? "visible" : "";

  React.useLayoutEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const ValueItem = ({
    item,
    index,
  }: {
    item: {
      icon: React.ReactNode;
      title: string;
      description: string;
    };
    index: number;
  }) => {
    return (
      <div className={`values-items-container`}>
        <div className={"values-item collapsed"}>
          <h3 className="values-h3">0{index + 1}</h3>

          {item.icon}

          <div className="values-title-container">
            <h2 className="values-h2">{item.title}</h2>
          </div>
        </div>

        <div className={"values-item full"}>
          {item.icon}

          <div className="values-title-container">
            <h2 className="values-h2">{item.title}</h2>
          </div>

          <div className="values-title-container">
            <h5 className="values-h5">{item.description}</h5>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div ref={ref}>
      <div className="values-container">
        <div className="values-pointer" />
        <h4 className="values-h4">Values</h4>
      </div>

      <div className={`values-items-row ${show}`}>
        {values.map((item, index) => (
          <ValueItem item={item} index={index} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Values;
