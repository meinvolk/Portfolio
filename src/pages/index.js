import React from 'react'
import Hero from '../components/hero'
import Navigation from '../components/navigation'
import Featured from '../components/featured'
import Footer from '../components/footer'
import ProjectsNav from '../components/projects'
import SmoothScroll from 'smooth-scroll'

export default ({ data }) => {
  new SmoothScroll('a[href*="#"]');
  return (
    <div>
        <Navigation />
        <Hero />
        <Featured />
        <div className='container projects-block'>
          <ProjectsNav allMarkDownFiles={data.allMarkdownRemark.edges}/>
        </div>
        <Footer />
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