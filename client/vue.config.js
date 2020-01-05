const path = require("path");

if (process.env.NODE_ENV === "production") {
  module.exports = {
    transpileDependencies: ["vuetify"],
    outputDir: path.resolve(__dirname, "../resources/views/"),
    assetsDir: "../static/",
  };
} else {
  module.exports = {
    transpileDependencies: ["vuetify"],
    outputDir: path.resolve(__dirname, "../resources/views/"),
    devServer: {
      proxy: "http://localhost:3000",
    },
  };
}
