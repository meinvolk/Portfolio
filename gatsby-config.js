module.exports = {
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
    'gatsby-transformer-remark'
  ],
}
