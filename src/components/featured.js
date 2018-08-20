import React, { Component }  from 'react'
import 'font-awesome/css/font-awesome.min.css'
import Fade from 'react-reveal/Fade'
import ScrollableAnchor from 'react-scrollable-anchor'

class Featured extends Component {
    render() {
        return (
            <ScrollableAnchor id="Skills">
                <div className="feature-block">
                    <div className="container"> 
                    <h2>Find out why I'm a one stop shop for all your web needs!</h2>
                    
                        <Fade className="row">
                            <div className="feature-block-item col-md-4">
                                <i className="fa fa-paint-brush"></i>
                                <h3>Web Design</h3>
                                <p>I have been an artist for almost a decade. Shoot me an idea so I can help you bring it to life.</p>
                            </div>
                            <div className="feature-block-item col-md-4">
                                <i className="fa fa-code"></i>
                                <h3>Web Development</h3>
                                <p>Web development is the keystone of my education and professional career. Leave the coding to me.</p>
                            </div>
                            <div className="feature-block-item col-md-4">
                                <i className="fa fa-cogs"></i>
                                <h3>Software</h3>
                                <p>Business problems? I write custom software for small businesses that solve challenges in all walks of life.</p>
                            </div>
                        </Fade>
                    </div>
                </div>
            </ScrollableAnchor>
        );
    }
};

export default Featured