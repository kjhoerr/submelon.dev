import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { FaGithub, FaMastodon } from "react-icons/fa";
import { BlockLink, Layout } from "../components";
import { BlockBody, BlockHeader } from "../styles";

const IndexPage = (): React.ReactElement => {
  return (
    <Layout>
      <div>
        <StaticImage
          src="../images/main.png"
          alt="Picture of Kevin Hoerr"
          placeholder="blurred"
          layout="fixed"
          width={350}
          height={350}
        />
      </div>
      <BlockHeader>Hello!</BlockHeader>
      <BlockBody>
        <p>
          I&apos;m a computer science and math graduate from Millersville
          University. I work as a Solutions Architect and specialize in
          development operations and systems validation for web applications.
        </p>
        <p>
          During my time at Millersville I was the lead Linux admin for the
          Cyber Defense Organization (CDO). In addition to constructing a new
          computer lab for our efforts, we participated in NCL and MACCDC.
        </p>
        <p>
          Most of my development experience is focused around full stack
          development. For the front-end I use TypeScript and ReactJS using
          create-react-app or NextJS. For back-end systems I have experience
          using Java with Spring Boot and rust with actix-web. To mediate APIs I
          have used Apache Kafka, OpenAPI, and GraphQL.
        </p>
        <p>
          My free time is spent around general computing hobbies. When I&apos;m
          not trying out new application frameworks I am fiddling around with
          Guix or NixOS. I run a kubernetes cluster at home to manage, maintain,
          and secure my personal network in conjunction with experimenting with
          distributed workloads.
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
    </Layout>
  );
};

export default IndexPage;
export { Head } from "../components/SEO";
