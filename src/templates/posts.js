import React from 'react'
import Navigation from '../components/navigation'
import Img from 'gatsby-image'

export default function Template({data}) {
    const { markdownRemark: post } = data;

    return (
        <div>
            <Navigation></Navigation>
            <div className='post-page'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-8'>
                            <div dangerouslySetInnerHTML={{__html: post.html}}/>
                        </div>
                        <div className='col-md-4'>
                            <Img sizes={post.frontmatter.sidebarImage.childImageSharp.sizes}/>
                        </div>
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
                sidebarImage {
                    childImageSharp {
                      sizes(maxWidth: 600) {
                        ...GatsbyImageSharpSizes
                      }
                    }
                }
            }
        }
    }
`