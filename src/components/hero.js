import React from 'react'
import 'font-awesome/css/font-awesome.min.css'
import ScrollableAnchor from 'react-scrollable-anchor'


const Hero = () => (
    <ScrollableAnchor id={'home'}>
        <div className="general-hero">    
            <div className="hero-image">
                <div className="hero-content">
                    <h1>William Bensinger</h1>
                    <h2>I am a full-stack developer specializing in web and software applications. I also draw, a lot.</h2>
                    <div className="list-icons">
                        <a href="https://www.linkedin.com/in/william-bensinger-506734129/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a>
                        <a href="https://github.com/meinvolk" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a>
                        <a href="https://www.instagram.com/bensingerbilly/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a>
                        <a href="https://www.facebook.com/billy.bensinger.9" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook-f"></i></a>
                    </div>
                </div>
                <div className="down-icon">
                    <a href="#Skills"><i className="fa fa-chevron-circle-down animated bounce"></i></a>
                </div>
            </div>
        </div>
    </ScrollableAnchor>

)

export default Hero