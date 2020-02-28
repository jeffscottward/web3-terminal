module.exports = {
  siteMetadata: {
    title: `Web3 Terminal`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: "Space Mono",
            variants: ["400", "400i", "700", "700i"]
          }
        ]
      }
    }
  ]
};
