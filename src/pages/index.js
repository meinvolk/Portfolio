import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Img from 'gatsby-image'
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
        {/* Create this as its own component, will need onclick events */}
        <div className='container'>
          <div className='row project-block'>
            {posts.map(({ node }) => {
              if(node.frontmatter.category === 'wordpress'){
                return (
                  <article key ={node.frontmatter.title} className="col-md-4">
                    <Link to={node.frontmatter.path}>
                      <Img sizes={node.frontmatter.featuredImage.childImageSharp.sizes}/>
                    </Link>
                  </article>
                );
              }
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark( limit: 6) {
      edges {
        node {
          html
          frontmatter {
            path
            title
            category
            featuredText
            featuredImage {
              childImageSharp {
                sizes(maxWidth: 390) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }
`;