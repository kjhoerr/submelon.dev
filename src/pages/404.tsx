import React from "react";
import { BlockLink, Layout } from "../components";
import { BlockBody, BlockHeader } from "../styles";

const NotFoundPage = (): React.ReactElement => {
  return (
    <Layout>
      <BlockHeader>Not found</BlockHeader>
      <BlockBody>
        Sorry! We couldn&apos;t find what you were looking for
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>
      </BlockBody>
      <BlockLink href="/" aria-label="Return to the front page">
        Home
      </BlockLink>
    </Layout>
  );
};

export default NotFoundPage;
export { Head } from "../components/SEO";
