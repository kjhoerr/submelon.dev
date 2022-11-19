import React from "react";

export function Head(): React.ReactElement {
  const metaDescription =
    "The official website of Kevin Hoerr, developer of websites.";
  return (
    <>
      <meta name="twitter:description" content={metaDescription} />
      <meta
        name="twitter:title"
        content="Kevin J Hoerr &lt;kjhoerr@submelon.tech&gt;"
      />
      <meta name="twitter:creator" content="Kevin J Hoerr" />
      <meta name="twitter:card" content="summary" />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={metaDescription} />
      <meta
        property="og:title"
        content="Kevin J Hoerr &lt;kjhoerr@submelon.tech&gt;"
      />
      <meta name="description" content={metaDescription} />
      <title>Kevin J Hoerr &lt;kjhoerr@submelon.tech&gt;</title>
    </>
  );
}
