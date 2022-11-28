import { useStaticQuery, graphql } from "gatsby";

type SiteVersion = NonNullable<
  NonNullable<Queries.getSiteVersionQuery["site"]>["siteMetadata"]
>["version"];

export const useSiteVersion = (): SiteVersion => {
  const { site } = useStaticQuery<Queries.getSiteVersionQuery>(graphql`
    query getSiteVersion {
      site {
        siteMetadata {
          version
        }
      }
    }
  `);

  return site?.siteMetadata?.version ?? "0";
};
