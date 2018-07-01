import React from 'react'
import Link from 'gatsby-link'
import 'font-awesome/css/font-awesome.min.css'

const Featured = () => (

    <div id="page-down" className="feature-block">
        <h2>This is going to be the tagline for the featured text block and an important statement to my audience.</h2>
        <div className="container">
            <div className="row">
                <div className="feature-block-item col-md-4">
                    <i className="fa fa-paint-brush"></i>
                    <h3>Web Design</h3>
                    <p>I have been an artist for almost a decade. Shoot me an idea and I will put it on the art board.</p>
                </div>
                <div className="feature-block-item col-md-4">
                    <i className="fa fa-code"></i>
                    <h3>Web Development</h3>
                    <p>Web development has been the keystone of my education and professional career. Leave the coding to me.</p>
                </div>
                <div className="feature-block-item col-md-4">
                    <i className="fa fa-cogs"></i>
                    <h3>Software</h3>
                    <p>Business problems? I write custom software for small businesses that solve challenges in all walks of life.</p>
                </div>
            </div>
        </div>
    </div>

)

export default Featured