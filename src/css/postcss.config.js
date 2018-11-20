const cssNano = require("cssnano");

const config = {
  plugins: {
    "postcss-import": {},
    "postcss-cssnext": {
      browsers: ["last 2 versions", "> 5%"]
    },
    cssNano: cssNano({
      preset: "default"
    })
  }
};

module.exports = config;
