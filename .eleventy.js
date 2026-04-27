module.exports = function (eleventyConfig) {
    
    eleventyConfig.addPassthroughCopy("js");
    // eleventyConfig.addPassthroughCopy("**/*.css");
    eleventyConfig.addPassthroughCopy("**/*.woff2");
    eleventyConfig.addPassthroughCopy("**/*.zip");
    eleventyConfig.addPassthroughCopy("**/*.jpg");
    eleventyConfig.addPassthroughCopy("**/*.png");
    eleventyConfig.addPassthroughCopy("assets/css");
    eleventyConfig.addPassthroughCopy("assets/img");
    eleventyConfig.addPassthroughCopy("libraries");


    module.exports = {
    dir: {
        input: "src",
        output: "/docs"
    }
};
};