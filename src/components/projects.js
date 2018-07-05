import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Img from 'gatsby-image'

const ProjectsNav = () => (
    <div>
        <h4>All</h4>
        <h4>Content Management</h4>
        <h4>E-Commerce</h4>
        <h4>Software</h4>
    </div>
)

const Projects = ({ frontmatter: { path, featuredImage } }) => (
    <article>
        <Link to={path}>
            <Img sizes={featuredImage.childImageSharp.sizes}/>
        </Link>
    </article>
)

module.exports = {
    Projects: Projects,
    ProjectsNav: ProjectsNav
}

export const ProjectQuery = graphql`
fragment ProjectQuery on MarkdownRemark{
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
`;