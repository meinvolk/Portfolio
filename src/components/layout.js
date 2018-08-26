import React from 'react'
import Helmet from 'react-helmet'
import Footer from './footer'
import { StaticQuery, graphql } from "gatsby"
import 'animate.css'
import '../scss/index.scss'
import 'bootstrap/dist/css/bootstrap-grid.min.css'


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
        

        <div>
          {children}
        </div>

        <Footer />

      </div>
    )}
  />
)

export default Layout
