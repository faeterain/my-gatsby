module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "My Gatsby Site",
    menuLinks: [
      {
        name: 'Home',
        link: '/'
      },
      {
        name: 'About',
        link: '/about'
      },
    ]
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    `gatsby-plugin-smoothscroll`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    // {
    //   resolve: `gatsby-theme-advanced`,
    //   options: {
    //     basePath: `/blog`,
    //   },
    // },
  ],
};
