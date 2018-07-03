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
        <div className='row featured-blog'>
          {posts.map(({ node }) => {
            return (
              <article key ={node.frontmatter.title} className="col-md-4">
                <Link to={node.frontmatter.path}>
                  <Img resolutions={node.frontmatter.featuredImage.childImageSharp.resolutions}/>
                  <p>{node.frontmatter.featuredText}</p>
                </Link>
              </article>
            );
          })}
        </div>
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
            featuredText
            featuredImage {
              childImageSharp {
                resolutions(width: 300) {
                  ...GatsbyImageSharpResolutions
                }
              }
            }
          }
        }
      }
    }
  }
`;
