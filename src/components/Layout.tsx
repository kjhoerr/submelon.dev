import React from "react";
import { IconContext } from "react-icons/lib";
import { Content, Footer } from "../styles";
import { useSiteVersion } from "../hooks";
import { getTimestamp } from "../util/timestamp";

import "../styles/main.css";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const version = useSiteVersion();
  return (
    <React.StrictMode>
      <main>
        <IconContext.Provider
          value={{ size: "20", style: { marginBottom: "-4px" } }}
        >
          <Content>{children}</Content>

          <Footer>
            <span>
              &copy;2023 kjhoerr@https://submelon.dev/:
              {getTimestamp(Number(version))}
            </span>
          </Footer>
        </IconContext.Provider>
      </main>
    </React.StrictMode>
  );
};

export default Layout;
