import React from "react";
import "./index.css";

interface Props {}

function Header(props: Props) {
  const menu: {
    title: string;
    link: string;
  }[] = [
    { title: "Home", link: "/" },
    { title: "Services", link: "/" },
    { title: "About", link: "/" },
    { title: "Work", link: "/" },
    { title: "Team", link: "/" },
    { title: "Contact", link: "/" },
    { title: "Blog", link: "/" },
  ];

  return (
    <div className="header">
      <div style={{ flex: 1 }}>
        <a href="/">
          <img src="main_logo.png" alt="Scrum Launch" width={160} />
        </a>
      </div>

      <div className="menu-list-container">
        <ul className="menu-list">
          {menu.map((item, index) => (
            <li className="menu-list-item" key={index}>
              <a href={item.link} className="menu-link">
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Header;
