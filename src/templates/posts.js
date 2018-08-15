import React from 'react'
import Navigation from '../components/navigation'
import Img from 'gatsby-image'
import { graphql } from "gatsby"
import ProjectsNav from '../components/projects'
import Layout from '../components/layout'

export default function Template({data}) {
    const { markdownRemark: post } = data;

    return (
        <Layout>
            <div>
                <Navigation />
                <div className='post-page'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-8'>
                                <div className='content' dangerouslySetInnerHTML={{__html: post.html}}/>
                                
                                {post.frontmatter.link !== '' ?
                                    <a href={post.frontmatter.link} target='_blank' rel="noopener noreferrer">
                                        <div className="btn-red"><p>View Website</p></div>
                                    </a> : ''
                                }
                                
                            </div>
                            <div className='col-md-4 sidebar'>
                                <Img fluid={post.frontmatter.sidebarImage.childImageSharp.fluid}/>
                            </div>
                        </div>
                        <div className='container projects-block'>
                            <ProjectsNav allMarkDownFiles={data.allMarkdownRemark.edges}/>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
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
                      fluid(maxWidth: 600) {
                        ...GatsbyImageSharpFluid
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