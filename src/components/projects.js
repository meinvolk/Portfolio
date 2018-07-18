import React, { Component }  from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import Carousel from 'nuka-carousel'
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor'

class ProjectsNav extends Component {
  constructor(props) {
    super(props);
    this.state = { category: 'all', showCarousel: false, carouselKey: 0, markDownArray: this.props.allMarkDownFiles };
    this.setCategory = this.setCategory.bind(this);
    this.updateStatesBasedOnWindowSize = this.updateStatesBasedOnWindowSize.bind(this);
  }

  componentWillMount() {
      this.updateStatesBasedOnWindowSize();
      configureAnchors({offset: -60});
  }

  componentDidMount() {
      window.addEventListener("resize", this.updateStatesBasedOnWindowSize)
  }
  
  componentWillUnmount() {
      window.removeEventListener("resize", this.updateStatesBasedOnWindowSize)
  }

  //Used to determin if the viewport is less than 770px, if so we update the state in order to display the carousel.
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
  
  //Update the array that corresponds with the correct category.
  setCategory(e, markDownFiles) {
    let markDownFilesArray = [];

    markDownFiles.map(({ node }) => {

      if(node.frontmatter.category === e || e === 'all'){

        let markDownFile = { 
          node: { 
            frontmatter: node.frontmatter, 
            id: node.id, 
            randomKey: Math.random() 
          } 
        }
z
        markDownFilesArray.push(markDownFile)
      }
    })
    this.setState({ category: e, markDownArray: markDownFilesArray });
  }

  render() {

    let markDownFiles = this.props.allMarkDownFiles;
    let categoryButtons = ['All', 'CMS', 'E-Commerce', 'Software'];
    
    return (
      <ScrollableAnchor id="Work">
        <div className='projects-categories'>
          <h3>Web Development  Portfolio</h3>
          <p>From Web Components and UI/UX animations to ASP.NET, E-commerce, CMS systems, and React.JS.
              Check out my latest portfolio projects.</p>

          {categoryButtons.map((item) => (
            <h4 key={item} onClick={() => this.setCategory(item.toLowerCase(), markDownFiles)} className='btn-dark'>{item}</h4>
          ))}
      
          {this.state.showCarousel 
          ? 
            <div className='row'>
              <Carousel key={this.state.carouselKey}> 
                {this.state.markDownArray.map(({ node }) => (
                    <Project key={node.randomKey} frontmatter={node.frontmatter} categoryState={this.state.category} />
                ))}
              </Carousel>
            </div>
          : 
            <div className='row'>
              {this.state.markDownArray.map(({ node }) => (
                <Project key={node.randomKey} frontmatter={node.frontmatter} categoryState={this.state.category} />
              ))}
            </div>
          }
        </div>
      </ScrollableAnchor>
    );
  }
}

class Project extends Component {
  render() {
    
      return (
        <div className="col-md-4">
          <article>
            <Link to={this.props.frontmatter.path}>
                <Img sizes={this.props.frontmatter.featuredImage.childImageSharp.sizes}/>
            </Link>
          </article>
        </div>
      );
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