import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "../styles/main.css";
import { FaGithub, FaMastodon } from "react-icons/fa";
import BlockLink from "../components/BlockLink";
import Footer from "../components/Footer";
import { BlockBody, BlockHeader, Content } from "../styles";

const TIMESTAMP = "1668805149";

// markup
const IndexPage = (): React.ReactElement => {
  return (
    <main>
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
        <BlockBody theme={{ padding: "4px 8px" }}>
          <p>
            I&apos;m a computer science and math graduate from Millersville
            University. I work as an IT consultant and specialize in development
            operations and systems validation for web applications.
          </p>
          <p>
            My most recent projects have been focused on full-stack development.
            I use Kubernetes for orchestration, NextJS for front-end, and
            rust+actix-web for my backend services with GraphQL serving as the
            public API.
          </p>
          <p>
            This site was recently rebuilt using GatsbyJS since the instance
            formerly holding this website broke during upgrades. Thank goodness
            for backups.
          </p>
          <em>- Kevin H.</em>
        </BlockBody>
        <BlockLink
          href="https://cybr.es/@kjhoerr"
          rel="me"
          aria-label="My Mastodon account"
        >
          <FaMastodon size={20} style={{ marginBottom: "-4px" }} />{" "}
          @kjhoerr@cybr.es
        </BlockLink>
        <BlockLink
          href="https://github.com/kjhoerr"
          rel="me"
          aria-label="My GitHub account with my most active personal projects"
        >
          <FaGithub size={20} style={{ marginBottom: "-4px" }} /> kjhoerr on
          GitHub
        </BlockLink>
      </Content>

      <Footer timestamp={TIMESTAMP} />
    </main>
  );
};

export default IndexPage;
export { Head } from "../components/SEO";
