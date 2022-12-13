const { inspect } = require("node:util");
const loadYAML = require("js-yaml").load;

module.exports = function (eleventyConfig) {
  eleventyConfig.ignores.add("_tailwind/");
  eleventyConfig.addFilter(
    "debug",
    (content) => `<pre>${inspect(content)}</pre>`
  );

  eleventyConfig.setLiquidOptions({ jsTruthy: true });
  eleventyConfig.addDataExtension("yaml", loadYAML);
  eleventyConfig.addDataExtension("yml", loadYAML);
  eleventyConfig.setQuietMode(doesPrefQuiet());

  eleventyConfig.addPassthroughCopy("asset");

  return {
    pathPrefix: process.env.ELEVENTY_pathPrefix ?? '',
    dir: {
      input: "src",
    },
  };
};

function doesPrefQuiet() {
  if (process.env.NODE_ENV === "production") return false;
  if (process.env.DEBUG_11ty === true) return false;
  return true;
}
