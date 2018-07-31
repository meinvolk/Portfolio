import React from 'react'
import Hero from '../components/hero'
import Featured from '../components/featured'
import ProjectsNav from '../components/projects'
import Contact from '../components/contact'
import Navigation from '../components/navigation'

export default ({ data }) => {
  return (
    <div>
        <Navigation pageType={'home-page'}/>
        <Hero />
        <Featured />
        <Contact />
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