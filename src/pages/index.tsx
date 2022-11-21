import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "../styles/main.css";
import { FaGithub, FaMastodon } from "react-icons/fa";
import BlockLink from "../components/BlockLink";
import Footer from "../components/Footer";
import { BlockBody, BlockHeader, Content } from "../styles";
import package_json from "../../package.json";
import { IconContext } from "react-icons";

const VERSION = package_json.version;

// markup
const IndexPage = (): React.ReactElement => {
  return (
    <main>
      <IconContext.Provider
        value={{ size: "20", style: { marginBottom: "-4px" } }}
      >
        <Content>
          <div>
            <StaticImage
              src="../images/main.png"
              alt="Picture of Kevin Hoerr"
              placeholder="tracedSVG"
              layout="fixed"
              width={350}
              height={350}
            />
          </div>
          <BlockHeader>Hello!</BlockHeader>
          <BlockBody>
            <p>
              I&apos;m a computer science and math graduate from Millersville
              University. I work as an IT consultant and specialize in
              development operations and systems validation for web
              applications.
            </p>
            <p>
              My most recent projects have been focused on full-stack
              development. I use Kubernetes for orchestration and NextJS for the
              front-end. For back-end development, I have built services enabled
              by Java with Spring Boot, Quarkus, and rust+actix-web with a
              GraphQL serving public API.
            </p>
            <p>
              I run a personal Kubernetes cluster at home using MicroOS and k3d.
              I have also run multiple clusters via DigitalOcean with
              deployments dedicated for hosting git projects, CI/CD, and code
              coverage. Since then all projects have been moved to GitHub.
            </p>
            <em>- Kevin H.</em>
          </BlockBody>
          <BlockLink
            href="https://cybr.es/@kjhoerr"
            rel="me"
            aria-label="My Mastodon account"
          >
            <FaMastodon /> @kjhoerr@cybr.es
          </BlockLink>
          <BlockLink
            href="https://github.com/kjhoerr"
            rel="me"
            aria-label="My GitHub account with my most active personal projects"
          >
            <FaGithub /> kjhoerr on GitHub
          </BlockLink>
        </Content>

        <Footer timestamp={VERSION} />
      </IconContext.Provider>
    </main>
  );
};

export default IndexPage;
export { Head } from "../components/SEO";
