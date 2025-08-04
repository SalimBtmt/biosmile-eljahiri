module.exports = {
  entry: ["src", "pages", "components"], // adapte selon ta structure
  ignorePatterns: [
    "**/*.test.ts",
    "**/*.test.tsx",
    "**/__tests__/**",
    "next.config.js",
    ".next/**",
    "public/**",
    "node_modules/**",
  ],
};
