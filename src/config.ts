import { getTimestamp } from "./util/timestamp";
import BuildInfo from "../config.json";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function (eleventyConfig: any) {
  // passthrough static files to public
  eleventyConfig.addPassthroughCopy({
    "./src/static/": "/",
  });

  // hook in configured build time for GH action to update
  eleventyConfig.addGlobalData("buildTimeEncoded", () => {
    return getTimestamp(Number(BuildInfo.version));
  });

  // ensure eleventy marks this config as watched, since it's typescript
  eleventyConfig.addWatchTarget("./src/config.ts");

  return {
    templateFormats: ["njk", "html"],
    htmlTemplateEngine: "njk",
    dir: {
      input: "src/pages",
      includes: "../templates",
      output: "public",
    },
  };
}
