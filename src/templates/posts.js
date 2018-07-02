import React from 'react'
import Helmet from 'react-helmet'
import Navigation from '../components/navigation'


export default function Template({data}) {
    const { markdownRemark: post } = data;

    return (
        <div className='post-page'>
            <Navigation></Navigation>
            <div className='container'>
                <h1>{post.frontmatter.title}</h1>
                <div dangerouslySetInnerHTML={{__html: post.html}}/>
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
            }
        }
    }
`