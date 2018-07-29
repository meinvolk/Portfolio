import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Animated from 'animate.css'
import '../scss/index.scss'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import Navigation from '../components/navigation'
import Footer from '../components/footer'

const Layout = ({ children, data }) => (
  <div>
    
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Web development portfolio of William Bensinger. Specializing in web design, web development, and software.' },
        { name: 'keywords', content: 'web, design, development, software, art' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' },

        { property: 'og:title', content: 'William Bensinger Portfolio' },
        { property: 'og:site_name', content: 'BensingerBilly' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: "https://bensingerbilly.com" },
        { property: 'og:description', content: 'Web development portfolio of William Bensinger. Specializing in web design, web development, and software.' },
        { property: 'og:image', content: 'https://bensingerbilly.com/static/Hero.89959350.jpg' },
        { property: 'og:site_name', content: "BensingerBilly" },
      ]}
    />

    <Navigation />

    <div>
      {children()}
    </div>
    
    <Footer />

  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
