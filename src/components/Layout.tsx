import React from "react";
import { IconContext } from "react-icons/lib";
import { Content, Footer } from "../styles";
import package_json from "../../package.json";
import { getTimestamp } from "../util/timestamp";

const VERSION = package_json.version;

const Layout = ({ children }) => {
  return (
    <React.StrictMode>
      <main>
        <IconContext.Provider
          value={{ size: "20", style: { marginBottom: "-4px" } }}
        >
          <Content>{children}</Content>

          <Footer>
            <span>
              &copy;2022 kjhoerr@https://submelon.dev/:
              {getTimestamp(Number(VERSION))}
            </span>
          </Footer>
        </IconContext.Provider>
      </main>
    </React.StrictMode>
  );
};

export default Layout;
