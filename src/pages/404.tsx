import * as React from "react";
import BlockLink from "../components/BlockLink";
import { BlockBody, BlockHeader, Content } from "../styles";

// markup
const NotFoundPage = (): React.ReactElement => {
  return (
    <main>
      <Content>
        <BlockHeader>Not found</BlockHeader>
        <BlockBody>
          Sorry{" "}
          <span role="img" aria-label="Pensive emoji">
            😔
          </span>{" "}
          we couldn&apos;t find what you were looking for.
        </BlockBody>
        <BlockLink href="/" aria-label="Return to the front page">
          Home
        </BlockLink>
      </Content>
    </main>
  );
};

export default NotFoundPage;
export { Head } from "../components/SEO";
