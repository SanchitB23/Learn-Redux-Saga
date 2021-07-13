module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "redux-saga-tut",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
  ],
};
