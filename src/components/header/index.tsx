import React from "react";
import { MenuContext } from "../../contexts/MenuContext";
import "./index.css";

interface Props {}

function Header(props: Props) {
  const {
    homeRef,
    aboutRef,
    blogRef,
    contactRef,
    servicesRef,
    teamRef,
    workRef,
  } = React.useContext(MenuContext);

  const menu: {
    title: string;
    ref?: React.RefObject<HTMLDivElement> | null;
  }[] = [
    { title: "Home", ref: homeRef },
    { title: "Services", ref: servicesRef },
    { title: "About", ref: aboutRef },
    { title: "Work", ref: workRef },
    { title: "Team", ref: teamRef },
    { title: "Contact", ref: contactRef },
    { title: "Blog", ref: blogRef },
  ];

  function scrollToView(ref: React.RefObject<HTMLDivElement>) {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="header">
      <div style={{ flex: 1 }}>
        <a href="/">
          <img src="main_logo.png" alt="Scrum Launch" width={160} />
        </a>
      </div>

      <div className="menu-list-container">
        <ul className="menu-list">
          {menu.map((item, index) => {
            return (
              <li className="menu-list-item" key={index}>
                <div
                  onClick={() => item.ref && scrollToView(item.ref)}
                  className="menu-link"
                >
                  {item.title}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Header;
