import React from 'react'
import Hero from '../components/hero'
import Navigation from '../components/navigation'
import Featured from '../components/featured'
import {Projects, ProjectsNav} from '../components/projects'


export default ({ data }) => {
  return (
    <div>
        <Navigation />
        <Hero />
        <Featured />
        
        
        <div className='container projects-block'>
          <ProjectsNav />
          <div className='row'>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <div key={node.id} className="col-md-4">
                <Projects frontmatter={node.frontmatter} />
              </div>
            ))}
          </div>
        </div>
    </div>
  );
};

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark( limit: 6) {
      edges {
        node {
          id
          ...ProjectQuery
        }
      }
    }
  }
`;