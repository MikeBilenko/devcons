const path = require("path");
module.exports = {
  resolve: {
    alias: {
      "@styles": path.resolve(__dirname, "src/styles"),
      "@ui": path.resolve(__dirname, "src/ui"),
      "@components": path.resolve(__dirname, "src/components"),
      "@modules": path.resolve(__dirname, "src/modules"),
    },
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
};
