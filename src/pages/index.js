import React from 'react'
import Hero from '../components/hero'
import Featured from '../components/featured'
import ProjectsNav from '../components/projects'
import Contact from '../components/contact'
import Navigation from '../components/navigation'
import Layout from '../components/layout'
import { graphql } from "gatsby"

export default ({ data }) => {
  return (
    <Layout>
      <div>
          <Navigation pageType={'home-page'}/>
          <Hero />
          <Featured />
          <Contact />
          <div className='container projects-block'>
            <ProjectsNav allMarkDownFiles={data.allMarkdownRemark.edges}/>
          </div>
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  {
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