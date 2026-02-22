module.exports = {
  default: {
    require: ["features/step-definitions/**/*.js", "support/**/*.js"],
    paths: ["features/**/*.feature"],
    format: ["progress", "allure-cucumberjs/reporter"],
    formatOptions: {
      resultsDir: "allure-results",
    },
  },
};