import React from 'react'
import Helmet from 'react-helmet'
import Animated from 'animate.css'
import '../scss/index.scss'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import Footer from './footer'
import { StaticQuery, graphql } from "gatsby"

const Layout = ({ children }) => (
<StaticQuery
  query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div>
        <Helmet 
          titleTemplate={`%s | ${data.site.siteMetadata.title}`} 
          defaultTitle={data.site.siteMetadata.title} 
          meta={[
            { name: 'description', content: 'Web development portfolio of William Bensinger. Specializing in web design, web development, and software.' },
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

        <div>
          {children}
        </div>

        <Footer />

      </div>
    )}
  />
)

export default Layout
