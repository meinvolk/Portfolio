import React from 'react'
import Hero from '../components/hero'
import Navigation from '../components/navigation'
import Featured from '../components/featured'
import {ProjectsNav} from '../components/projects'


export default ({ data }) => {
  return (
    <div>
        <Navigation />
        <Hero />
        <Featured />
        <div className='container projects-block'>
          <ProjectsNav allMarkDownFiles={data.allMarkdownRemark.edges}/>
        </div>
    </div>
  );
};

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          ...ProjectQuery
        }
      }
    }
  }
`;