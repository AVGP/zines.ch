export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/img");

  // Every page uses the base layout unless it says otherwise.
  eleventyConfig.addGlobalData("layout", "base.njk");

  // Newest zines first.
  eleventyConfig.addCollection("zines", (api) =>
    api.getFilteredByGlob("src/zines/*.md").sort((a, b) => b.date - a.date)
  );

  eleventyConfig.addFilter("isoDate", (d) => new Date(d).toISOString().slice(0, 10));
  eleventyConfig.addFilter("niceDate", (d) =>
    new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })
  );

  // {% zineGrid collections.zines, 6 %} — usable straight from Markdown.
  // Output is a single line so Markdown never mistakes it for a code block.
  eleventyConfig.addShortcode("zineGrid", (zines, limit) => {
    const list = limit ? zines.slice(0, limit) : zines;
    const esc = (s = "") => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
    const cards = list
      .map(({ url, data: z }) =>
        `<li class="card"><a href="${url}">` +
        `<img src="${z.cover}" alt="Cover of ${esc(z.title)}" width="672" height="900" loading="lazy" decoding="async">` +
        `<span class="card-topic">${esc(z.topic)} · ${esc(z.size)} · ${z.pages}p</span>` +
        `<h3>${esc(z.title)}</h3>` +
        `<p class="card-desc">${esc(z.description)}</p>` +
        `<span class="card-meta">by ${esc(z.author)} · ${esc(z.material)}</span>` +
        `</a></li>`
      )
      .join("");
    return `<ul class="zine-grid" role="list">${cards}</ul>`;
  });

  return {
    dir: { input: "src", includes: "_includes", data: "_data", output: "_site" },
    markdownTemplateEngine: "njk",
  };
}
