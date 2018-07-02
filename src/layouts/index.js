import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Animate from 'animate.css'

import '../scss/index.scss'
import 'bootstrap/dist/css/bootstrap-grid.min.css'

const Layout = ({ children, data }) => (
  <div>

    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Web development portfolio of William Bensinger. Specializing in web design, web development, and software.' },
        { name: 'keywords', content: 'web, design, development, software, art' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' },
      ]}
    />

    <div>
      {children()}
    </div>
    
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
`
