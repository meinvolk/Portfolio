import React from 'react'
import Navigation from '../components/navigation'
import Img from 'gatsby-image'
import ProjectsNav from '../components/projects'

export default function Template({data}) {
    const { markdownRemark: post } = data;

    return (
        <div>
            <div className='post-page'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-8'>
                            <div className='content' dangerouslySetInnerHTML={{__html: post.html}}/>
                            
                            {post.frontmatter.link !== '' ?
                                <a href={post.frontmatter.link} target='_blank'>
                                    <div className="btn-red"><p>View Website</p></div>
                                </a> : ''
                            }
                            
                        </div>
                        <div className='col-md-4 sidebar'>
                            <Img sizes={post.frontmatter.sidebarImage.childImageSharp.sizes}/>
                        </div>
                    </div>
                    <div className='container projects-block'>
                        <ProjectsNav allMarkDownFiles={data.allMarkdownRemark.edges}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const postQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: {path: {eq: $path}}) {
            html
            frontmatter {
                path
                title
                link
                sidebarImage {
                    childImageSharp {
                      sizes(maxWidth: 600) {
                        ...GatsbyImageSharpSizes
                      }
                    }
                }
            }
        }
        allMarkdownRemark {
            edges {
              node {
                id
                ...ProjectQuery
              }
            }
          }
    }
`