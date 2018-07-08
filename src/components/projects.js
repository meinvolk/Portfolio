import React, { Component }  from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

class ProjectsNav extends Component {
  constructor(props) {
    super(props);
    this.state = { category: 'all'};
    this.setCategory = this.setCategory.bind(this);
  }
  
  setCategory(e) {
    this.setState({ category: e });
  }

  render() {
    return (
        <div className='projects-categories'>

            <h3>Web Development  Portfolio</h3>
            <p>From Web Components and UI/UX animations to ASP.NET, E-commerce, CMS systems, and React.JS.
               Check out my latest portfolio projects.</p>

            <h4 onClick={() => this.setCategory('all')} className='btn-dark'>All</h4>
            <h4 onClick={() => this.setCategory('cms')} className='btn-dark'>CMS</h4>
            <h4 onClick={() => this.setCategory('ecommerce')} className='btn-dark'>E-Commerce</h4>
            <h4 onClick={() => this.setCategory('software')} className='btn-dark'>Software</h4>
        
            <div className='row'>
              {this.props.allMarkDownFiles.map(({ node }) => (
                  <Projects key={node.id} frontmatter={node.frontmatter} categoryState={this.state.category}/>
              ))}
            </div>    
        </div>
    );
  }
}

class Projects extends Component {
  render() {
    if(this.props.categoryState === this.props.frontmatter.category
    || this.props.categoryState === 'all'){
      return (
        <div className="col-md-4">
          <article key={Math.random()}>
            <Link to={this.props.frontmatter.path}>
                <Img sizes={this.props.frontmatter.featuredImage.childImageSharp.sizes}/>
            </Link>
          </article>
        </div>
      );
    }
    else{
      return <p className="hide"></p>;
    }
  }
}

module.exports = ProjectsNav

export const ProjectQuery = graphql`
fragment ProjectQuery on MarkdownRemark{
    frontmatter {
        path
        title
        category
        featuredText
        featuredImage {
          childImageSharp {
            sizes(maxWidth: 390) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
  }
`;