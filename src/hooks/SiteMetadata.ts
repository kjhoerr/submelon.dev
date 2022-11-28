import { useStaticQuery, graphql } from "gatsby";

type SiteMetadata = NonNullable<
  NonNullable<Queries.getSiteMetadataQuery["site"]>["siteMetadata"]
>;

export const useSiteMetadata = (): SiteMetadata => {
  const { site } = useStaticQuery<Queries.getSiteMetadataQuery>(graphql`
    query getSiteMetadata {
      site {
        siteMetadata {
          author
          description
          title
        }
      }
    }
  `);

  return site?.siteMetadata ?? ({} as SiteMetadata);
};
