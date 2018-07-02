import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Hero from '../components/hero'
import Navigation from '../components/navigation'
import Featured from '../components/featured'

class IndexPage extends React.Component {
  render() {
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <div>
        <Navigation></Navigation>
        <Hero></Hero>
        <Featured></Featured>
        {posts.map(({ node }) => {
          
          return (
            <div>
               <h1>{node.frontmatter.title}</h1>
               <div dangerouslySetInnerHTML={{__html: node.html}}/>
            </div>
          )
          
        })}
      </div>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark {
      edges {
        node {
          html
          frontmatter {
            path
            title
          }
        }
      }
    }
  }
`
