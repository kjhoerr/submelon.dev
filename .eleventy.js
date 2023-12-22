module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy({
        "./src/public/": "/",
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