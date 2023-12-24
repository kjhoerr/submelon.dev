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
	config.addShortcode("image", async (src: string, alt: string, sizes: string, width: number, height: number | undefined) => {
		let metadata = await Image(src, {
			widths: [width, 550, "auto"],
			formats: ["webp", "png"],
      urlPath: "/images/",
      outputDir: "./public/images/",
		});

		let url = metadata.png?.[0].url ?? "";

		return `<picture>
${Object.values(metadata).map(imageFormat => {
	return `  <source type="${imageFormat[0].sourceType}" srcset="${imageFormat.map(entry => entry.srcset).join(", ")}" sizes="${sizes}">`;
}).join("\n")}
  <img src="${url}" width="${width}" height="${height ?? width}" alt="${alt}">
</picture>`;
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
