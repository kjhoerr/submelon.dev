import { formatDate, getTimestamp } from "./util/timestamp";
import BuildInfo from "../config.json";
import Image from "@11ty/eleventy-img";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function (config: any) {
  // passthrough static files to public
  config.addPassthroughCopy({
    "./src/static/": "/",
  });

  // hook in configured build time for GH action to update
  config.addGlobalData("site", () => BuildInfo);
  config.addGlobalData("buildTimeEncoded", () => {
    return getTimestamp(Number(BuildInfo.version));
  });

  // images
  config.addShortcode(
    "image",
    async (
      src: string,
      alt: string,
      sizes: string,
      width: number,
      height: number | undefined,
    ) => {
      let metadata = await Image(src, {
        widths: [width, 550, "auto"],
        formats: ["webp", "png"],
        urlPath: "/images/",
        outputDir: "./public/images/",
      });

      let url = metadata.png?.[0].url ?? "";

      return `<picture>
${Object.values(metadata)
  .map((imageFormat) => {
    return `  <source type="${imageFormat[0].sourceType}" srcset="${imageFormat
      .map((entry) => entry.srcset)
      .join(", ")}" sizes="${sizes}">`;
  })
  .join("\n")}
  <img src="${url}" width="${width}" height="${height ?? width}" alt="${alt}">
</picture>`;
    },
  );

  // add `cspMode` shortcode
  config.addShortcode("metaCsp", function () {
    const runMode = this.eleventy.env.runMode;
    let policy: string;
    if (runMode === "serve" || runMode == "watch") {
      policy =
        "default-src http://localhost:8080/;img-src http://localhost:8080/ data:;connect-src ws://localhost:8080/;script-src 'strict-dynamic' 'sha512-7Y25+FX/kRUbZEHtQBOSLffzofBxz8ABQErLAVpGkfzactkpJU5wtTmhIfIZeTw7VHg1JeTIC5kHkzPq7LqR1w==';";
    } else {
      // runMode === "build" or unknown
      policy =
        "default-src 'self';img-src 'self' data:;script-src 'none';object-src 'none';base-uri 'none';connect-src: 'none';";
    }
    return `<meta http-equiv="Content-Security-Policy" content="${policy}">`;
  });

  // add `date` filter
  config.addFilter("formatDate", formatDate);

  // ensure eleventy marks this config as watched, since it's typescript
  config.addWatchTarget("./src/config.ts");

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
