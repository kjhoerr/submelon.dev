module.exports = function (eleventyConfig) {
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