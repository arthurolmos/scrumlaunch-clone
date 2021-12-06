import React from "react";
import { MenuContext } from "../../contexts/MenuContext";
import {
  MdComputer,
  MdPhoneAndroid,
  MdPhotoCamera,
  MdOutlineAnchor,
} from "react-icons/md";
import { IoPeopleOutline } from "react-icons/io5";
import { GiSpeaker } from "react-icons/gi";
import "./index.css";

interface Props {}

interface ServiceItem {
  title: string;
  description: string;
  info: {
    description: string;
    sub?: {
      title: string;
      description: string | string[];
    }[];
  };
  icon: React.ReactNode;
}

const values: ServiceItem[] = [
  {
    icon: <MdComputer className="services-list-icon" />,
    title: "web development",
    description:
      "We build scalable web applications using the most popular modern frameworks.",
    info: {
      description:
        "Our web application development experience includes programmatic advertising systems, online video engines, consumer facing web applications and brand promotional landing pages.",
      sub: [
        {
          title: "WE SUPPORT",
          description: [
            "React",
            "Angular",
            "HTML5",
            "CSS",
            "JQuery",
            "Python (Django or Flask)",
            "Ruby on Rails",
            "PHP",
            "Go",
            "Java",
            "AWS",
            "Heroku",
            "Other popular frameworks, languages and infrastructure",
          ],
        },
      ],
    },
  },
  {
    icon: <MdPhoneAndroid className="services-list-icon" />,
    title: "Mobile Applications",
    description:
      "Our team has extensive experience building engaging applications for iOS and Android.",
    info: {
      description:
        "We have the ability to build your mobile app in either the natively supported OS language (Swift, Java) or using a hybrid framework (ReactNative, Ionic).",
      sub: [
        {
          title: "OUR APPROACH",
          description:
            "We will consult with you to understand your apps requirements and can suggest an approach based on this information. For a vanilla app that does not requiire any speciialized device functionality, we will often reccommend ReactNative due to its speed and cross platform compabiltiy.",
        },
      ],
    },
  },
  {
    icon: <MdPhotoCamera className="services-list-icon" />,
    title: "Staff Augmentation",
    description:
      "We provide engineering resources to instantly scale your development team. Eliminate long hiring cycles or under-utilized resources.",
    info: {
      description:
        "We provide on demand engineering resources for your company immediately. ScrumLaunch delivers a high quality solution for scaling your team quickly.",
      sub: [
        {
          title: "ELIMINATE LONG HIRING CYCLES",
          description:
            "Get talented engineers inserted directly into your normal workflow now. We have a vetted team of developers so you can skip the painful hiring process.",
        },
        {
          title: "COST EFFECTIVE",
          description:
            "Our solution provides a flexibile way for you to scale your team up or down as needed without paying under utilized staff members.",
        },
      ],
    },
  },
  {
    icon: <MdOutlineAnchor className="services-list-icon" />,
    title: "UX Design & Prototyping",
    description:
      "Great user experience is essential to any successful product. We take it seriously.",
    info: {
      description:
        "Our process begins with a discovery phase where we talk directly with your target customers to deeply understand their mindset and build empathy for the challenges they face.",
      sub: [
        {
          title: "WHY US",
          description:
            "We rapidly develop wireframes and implement a rigorous user testing process to get valuable feedback.",
        },
        {
          title: "READY FOR LAUNCH",
          description:
            "High fidelity wireframes are designed to specifications required for development.",
        },
      ],
    },
  },
  {
    icon: <IoPeopleOutline className="services-list-icon" />,
    title: "QA Automation",
    description:
      "QA automation is included in all of our projects and also offered as an a la carte ongoing service.",
    info: {
      description:
        "QA and poor reliability tend to be the achilles ankle of most new product user experience and even plague larger companies who regulary deploy new code.",
      sub: [
        {
          title: "WE BELIEVE IN AUTOMATION",
          description:
            "We believe in automating the QA process through test writing and embracing leading QA frameworks.",
        },
        {
          title: "POPULAR FRAMEWORKS",
          description: ["RSpec", "Selenium", "Karma"],
        },
      ],
    },
  },
  {
    icon: <GiSpeaker className="services-list-icon" />,
    title: "Marketing Automation",
    description:
      "We implement robust analytics systems so you can optimize your customer onboarding journey and user experience.",
    info: {
      description:
        "Analyzing user experience and data is an essential element of the product development cycle.",
      sub: [
        {
          title: "WHY US",
          description:
            "We have deep experience in qualitative user analysis in the form of user interviews and also in data driven analysis of user product journeys.",
        },
        {
          title: "CUSTOMER JOURNEYS",
          description:
            "We have implemented numerous marketing funnels and analytics systems that enable your entire data flow to remain connected throughout a user experience. From seeing your ad through becoming a power user of your product.",
        },
        {
          title: "A FEW TOOLS WE LIKE",
          description: [
            "Google Analytics",
            "MixPanel",
            "Segment",
            "Autopilot",
            "Inspectlet",
            "Zapier",
            "AdEspresso",
            "Optimizely",
          ],
        },
      ],
    },
  },
];

function Services(props: Props) {
  const { servicesRef } = React.useContext(MenuContext);

  const ref = React.useRef<HTMLDivElement>(null);

  const [visible, setVisible] = React.useState(false);

  const [modalItem, setModalItem] = React.useState<ServiceItem | null>(null);
  const closeModal = () => setModalItem(null);

  React.useEffect(() => {
    if (modalItem) {
    }
  }, [modalItem]);

  const onScroll = () => {
    const topPosition = ref?.current?.getBoundingClientRect().top;
    console.log(ref.current);

    if (topPosition) {
      const scrollPosition = window.scrollY + window.innerHeight - 1800;
      console.log(
        "services",
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

  return (
    <div ref={servicesRef}>
      <div className={`services-container`} ref={ref}>
        <div className="services-title">
          <h1 className="services-h1">Services</h1>
          <div className="services-title-underline" />
        </div>

        <div className={`services-grid-container ${show}`}>
          {values.map((item, index) => {
            return (
              <div className="services-list-item">
                <div style={{ color: "#8980fe" }}>{item.icon}</div>
                <h3>{`${index + 1}. ${item.title}`}</h3>
                <p>{item.description}</p>

                <div
                  className="services-button-container"
                  onClick={() => setModalItem(item)}
                >
                  <p>INFO</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div
        style={{
          display: modalItem ? "block" : "none",
        }}
      >
        <div className="services-modal-backdrop" onClick={closeModal} />
        <div className="services-modal">
          <div className="services-modal-container">
            <div className="services-modal-title">
              {modalItem?.icon}
              <p style={{ marginLeft: 20 }}>{modalItem?.title}</p>
            </div>
            <div className="services-modal-body">
              <p>{modalItem?.info.description}</p>
              {modalItem?.info.sub?.map((item) => {
                return (
                  <>
                    <h5>{item.title}</h5>
                    {typeof item.description === "string" ? (
                      <p>{item.description}</p>
                    ) : (
                      <ul>
                        {item.description.map((item) => {
                          return <li>{item}</li>;
                        })}
                      </ul>
                    )}
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
