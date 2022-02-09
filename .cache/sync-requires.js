
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/whiterabbit/Sites/portfolio.me/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/whiterabbit/Sites/portfolio.me/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/whiterabbit/Sites/portfolio.me/src/pages/index.js"))
}

