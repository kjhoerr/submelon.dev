import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import SEO from "../components/SEO";
import "../styles/main.css";
import { FaMastodon } from "react-icons/fa";

const TIMESTAMP = "1619122879";
const SHORT_CHARS = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

function toShort(valu: number): string {
  return valu
    .toString()
    .match(/.{1,2}/g)
    .map((s) => SHORT_CHARS[parseInt(s)])
    .join("");
}

function getTimestamp(seconds: number): string {
  const date = new Date(seconds * 1000);
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  return (
    toShort(year) +
    "." +
    toShort(month) +
    "." +
    toShort(day) +
    "." +
    toShort(hour) +
    "." +
    toShort(minute) +
    "-0"
  );
}

// styles
const StyledContainer = styled.div`
  div#content {
    width: 350px;
    margin: 0px auto;
    margin-bottom: 120px;
    padding-top: 136px;
  }
  div#header {
    text-align: center;
    pointer-events: none;
    user-select: none;
  }
  div#tagline {
    background-color: #000;
    width: 100%;
    text-align: center;
    color: #fff;
    font-size: 36px;
    font-weight: bold;
  }
  div#info {
    padding: 4px 8px;
  }
  div#info a,
  div#info a:visited,
  div#info a:hover {
    text-decoration: none;
    color: #000;
    padding: 1px 3px;
  }
  div#info a,
  div#info a:visited {
    background-color: #e1e1e1;
  }
  div#info a:hover {
    background-color: #d5d5d5;
  }
  div#info,
  div.link {
    background-color: #fff;
    border: 1px #000 solid;
    border-left: 3px #000 solid;
    border-right: 3px #000 solid;
  }
  div.link,
  div#tagline {
    margin-top: 3px;
  }
  div.link > a,
  div.link > a:visited,
  div.link > a:active {
    padding: 8px;
    width: 328px;
    display: block;
    text-align: center;
    text-decoration: none;
    color: #666;
  }
  div.link:hover {
    background-color: #ddd;
    color: #222;
  }
  div.link:last-child,
  div.link:last-child > a {
    border-bottom-left-radius: 18px;
    border-bottom-right-radius: 18px;
  }
  q,
  p,
  em {
    display: block;
    text-indent: 28px;
  }

  p {
    margin: 0px 0px 16px;
  }

  div#meta {
    width: 100%;
    position: fixed;
    left: 0px;
    bottom: 0px;
    text-align: center;
    font-size: 12px;
  }
  div#meta > span {
    background-color: #e1e1e1;
  }
`;

// markup
const IndexPage = () => {
  return (
    <main>
      <SEO title="Kevin J Hoerr <kjhoerr@submelon.tech>" />
      <StyledContainer>
        <div id="content">
          <div id="header">
            <StaticImage
              src="../images/main.png"
              alt="Kevin J Hoerr"
              placeholder="blurred"
              layout="fixed"
              width={340}
              height={340}
            />
          </div>
          <div id="tagline">Hello!</div>
          <div id="info">
            <p>
              I'm a computer science and math graduate from Millersville
              University. I work as an IT consultant and specialize in
              development operations and systems validation for web
              applications.
            </p>
            <p>
              My most recent projects have been focused on full-stack
              development. I use Kubernetes for orchestration, NextJS for
              front-end, and rust+actix-web for my backend services with GraphQL
              serving as the public API.
            </p>
            <p>
              This site was recently rebuilt using GatsbyJS since the instance
              formerly holding this website broke during upgrades. Thank
              goodness for backups.
            </p>
            <em>- Kevin H.</em>
          </div>
          <div id="links">
            <div className="link">
              <a href="https://cybr.es/@kjhoerr" rel="me">
                <FaMastodon size={20} style={{ marginBottom: "-4px" }} />{" "}
                @kjhoerr@cybr.es
              </a>
            </div>
            <div className="link">
              <a href="https://order.blackrockbrews.com">
                Black Rock Brewing (recent project)
              </a>
            </div>
            <div className="link">
              <a href="https://git.submelon.dev">
                My Gitea instance for pet projects
              </a>
            </div>
          </div>
        </div>

        <div id="meta">
          <span>
            &copy;2021 kjhoerr@https://submelon.dev/:
            {getTimestamp(parseInt(TIMESTAMP))}
          </span>
        </div>
      </StyledContainer>
    </main>
  );
};

export default IndexPage;
