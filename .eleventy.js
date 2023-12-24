const timestamp = require("./src/util/timestamp");
const buildInfo = require("./config.json");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy({
        "./src/static/": "/",
    });
    eleventyConfig.addGlobalData("buildTimeEncoded", () => {
        return timestamp.getTimestamp(buildInfo.version);
    });

    return {
		templateFormats: [
			"njk",
			"html",
		],
		htmlTemplateEngine: "njk",
        dir: {
            input: "src/pages",
            includes: "../templates",
            output: "public"
        },
    };
};