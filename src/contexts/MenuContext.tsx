import React from "react";

interface Props {
  children: React.ReactNode;
}

export const MenuContext = React.createContext({
  homeRef: React.createRef<HTMLDivElement>(),
  servicesRef: React.createRef<HTMLDivElement>(),
  aboutRef: React.createRef<HTMLDivElement>(),
  workRef: React.createRef<HTMLDivElement>(),
  teamRef: React.createRef<HTMLDivElement>(),
  contactRef: React.createRef<HTMLDivElement>(),
  blogRef: React.createRef<HTMLDivElement>(),
});

export function MenuProvider(props: Props) {
  const { children } = props;

  const homeRef = React.createRef<HTMLDivElement>();
  const servicesRef = React.createRef<HTMLDivElement>();
  const aboutRef = React.createRef<HTMLDivElement>();
  const workRef = React.createRef<HTMLDivElement>();
  const teamRef = React.createRef<HTMLDivElement>();
  const contactRef = React.createRef<HTMLDivElement>();
  const blogRef = React.createRef<HTMLDivElement>();

  return (
    <MenuContext.Provider
      value={{
        homeRef,
        servicesRef,
        aboutRef,
        workRef,
        teamRef,
        contactRef,
        blogRef,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
}
