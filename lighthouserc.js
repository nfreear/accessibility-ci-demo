/**
 * Lighthouse CI configuration (can be a JSON file).
 *
 * @see https://github.com/tmobile/magentaA11y
 * @see https://github.com/GoogleChrome/lighthouse-ci/blob/main/docs/configuration.md
 */

module.exports = {
  "ci": {
    "collect": {
      "staticDistDir": "./pages",
      "url": [
        "http://localhost/fails.html",
        "http://localhost/passes.html"
      ],
      "numberOfRuns": 1
    },
    "assert": {
      "assertions": {
        "categories:seo": ["warn", {"minScore": 0.9}],
        "categories:performance": ["warn", {"minScore": 0.8}],
        "categories:accessibility": ["error", {"minScore": 1}]
      }
    }
  }
};
