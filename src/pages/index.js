import React from 'react'
import { graphql } from "gatsby"
import Hero from '../components/hero'
import Featured from '../components/featured'
import ProjectsNav from '../components/projects'
import Contact from '../components/contact'
import Navigation from '../components/navigation'
import Layout from '../components/layout'

export default ({ data }) => {
  return (
    <Layout>
          <Navigation pageType={'home-page'}/>
          <Hero />
          <Featured />
          <Contact />
          <div className='container projects-block'>
            <ProjectsNav allMarkDownFiles={data.allMarkdownRemark.edges}/>
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