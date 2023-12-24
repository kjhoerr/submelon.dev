import { getTimestamp } from "./util/timestamp";
import BuildInfo from "../config.json";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function (eleventyConfig: any) {
  eleventyConfig.addPassthroughCopy({
    "./src/static/": "/",
  });
  eleventyConfig.addGlobalData("buildTimeEncoded", () => {
    return getTimestamp(Number(BuildInfo.version));
  });
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
