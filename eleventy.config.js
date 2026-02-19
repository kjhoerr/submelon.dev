import { formatDate, getTimestamp } from "./src/util/timestamp.js";
import BuildInfo from "./config.json" with { type: "json" };
import Image from "@11ty/eleventy-img";
import sriToolbox from "sri-toolbox";
import fs from "node:fs";

const ImageFormat = (sizes) => (imageFormat) => {
  return `  <source type="${imageFormat[0].sourceType}" srcset="${imageFormat
    .map((entry) => entry.srcset)
    .join(", ")}" sizes="${sizes}" />`;
};

const ImageMetadata = (metadata, sizes) => {
  return Object.values(metadata).map(ImageFormat(sizes)).join("\n");
};

export default async function (config) {
  // passthrough static files to public
  config.addPassthroughCopy({
    "./src/static/": "/",
  });

  // hook in configured build time for GH action to update
  config.addGlobalData("site", () => BuildInfo);
  config.addGlobalData("buildTimeEncoded", () => {
    return getTimestamp(Number(BuildInfo.version));
  });
  config.addGlobalData("reloadClientHash", () => {
    return sriToolbox.generate({ algorithms: ["sha512"] }, fs.readFileSync("node_modules/@11ty/eleventy-dev-server/client/reload-client.js", "utf8"));
  });

  // images
  config.addShortcode("image", async (src, alt, sizes, width, height) => {
    let metadata = await Image(src, {
      widths: [width, 550, "auto"],
      formats: ["webp", "png"],
      urlPath: "/images/",
      outputDir: "./public/images/",
    });

    let url = metadata.png?.[0].url ?? "";

    return `<picture>
${ImageMetadata(metadata, sizes)}
  <img src="${url}" width="${width}" height="${height ?? width}" alt="${alt}">
</picture>`;
  });

  // add `date` filter
  config.addFilter("formatDate", formatDate);

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
