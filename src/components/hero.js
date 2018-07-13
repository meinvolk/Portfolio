import React from 'react'
import Link from 'gatsby-link'
import 'font-awesome/css/font-awesome.min.css'

const Hero = () => (

    <div className="general-hero">    
    <div className="hero-image">
        <div className="hero-content">
            <h1>William Bensinger</h1>
            <h2>I am a full-stack developer specializing in web and software applications. I also draw, a lot.</h2>
            <div className="list-icons">
                <a href="https://www.linkedin.com/in/william-bensinger-506734129/" target="_blank"><i className="fa fa-linkedin"></i></a>
                <a href="https://github.com/meinvolk" target="_blank"><i className="fa fa-github"></i></a>
                <a href="https://www.instagram.com/bensingerbilly/" target="_blank"><i className="fa fa-instagram"></i></a>
                <a href="https://www.facebook.com/billy.bensinger.9" target="_blank"><i className="fa fa-facebook-f"></i></a>
            </div>
        </div>
        <div className="down-icon">
            <a href="#page-down"><i className="fa fa-chevron-circle-down animated bounce"></i></a>
        </div>
    </div>
</div>

)

export default Hero