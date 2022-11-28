import React from "react";
import { useSiteMetadata } from "../hooks";

export function Head(): React.ReactElement {
  const { author, description, title } = useSiteMetadata();

  return (
    <>
      <meta name="twitter:description" content={description ?? ""} />
      <meta name="twitter:title" content={title ?? ""} />
      <meta name="twitter:creator" content={author ?? ""} />
      <meta name="twitter:card" content="summary" />
      <meta name="description" content={description ?? ""} />
      <title>{title}</title>
    </>
  );
}
