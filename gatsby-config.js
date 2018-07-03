module.exports = {
  pathPrefix: "/portfolio",
  siteMetadata: {
    title: 'William Bensinger',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'posts',
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              quality: 80,
              maxWidth: 600,
              linkImagesToOriginal: false
            }
          },
          'gatsby-remark-copy-linked-files'
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
