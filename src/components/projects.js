import React, { Component }  from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import Carousel from 'nuka-carousel'

class ProjectsNav extends Component {
  constructor(props) {
    super(props);
    this.state = { category: 'all', showCarousel: false, carouselKey: 0 };
    this.setCategory = this.setCategory.bind(this);
    this.updateStatesBasedOnWindowSize = this.updateStatesBasedOnWindowSize.bind(this);
    this.refreshCarousel = this.refreshCarousel.bind(this);
  }

  componentWillMount() {
      this.updateStatesBasedOnWindowSize()
  }

  componentDidMount() {
      window.addEventListener("resize", this.updateStatesBasedOnWindowSize)
  }
  
  componentWillUnmount() {
      window.removeEventListener("resize", this.updateStatesBasedOnWindowSize)
  }

  updateStatesBasedOnWindowSize() {
      const isClient = typeof window !== 'undefined';
      if(isClient){

          const w = window,
          d = document,
          documentElement = d.documentElement,
          body = d.getElementsByTagName('body')[0],
          width = w.innerWidth || 
                  documentElement.clientWidth || body.clientWidth

          if (width >= 770) this.setState({ showCarousel: false })
          else this.setState({ showCarousel: true })
      }
  }
  
  setCategory(e) {
    this.setState({ category: e });
    this.refreshCarousel();
  }

  refreshCarousel() {
    this.setState({ carouselKey: Math.random() })
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
      
          {this.state.showCarousel 
          ? 
            <div className='row'>
              <Carousel key={this.state.carouselKey}> 
                {this.props.allMarkDownFiles.map(({ node }) => (
                    <Project key={node.id} frontmatter={node.frontmatter} categoryState={this.state.category} />
                ))}
              </Carousel>
            </div>
          : 
            <div className='row'>
              {this.props.allMarkDownFiles.map(({ node }) => (
                <Project key={node.id} frontmatter={node.frontmatter} categoryState={this.state.category} />
              ))}
            </div>
          }

        </div>
    );
  }
}

class Project extends Component {
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
      return null;
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