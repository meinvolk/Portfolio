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
                <Link to="https://www.linkedin.com/in/william-bensinger-506734129/" target="_blank"><i className="fa fa-linkedin"></i></Link>
                <Link to="https://github.com/meinvolk" target="_blank"><i className="fa fa-github"></i></Link>
                <Link to="https://www.instagram.com/bensingerbilly/" target="_blank"><i className="fa fa-instagram"></i></Link>
                <Link to="https://www.facebook.com/billy.bensinger.9" target="_blank"><i className="fa fa-facebook-f"></i></Link>
            </div>
            
        </div>
        <div className="down-icon">
            <Link data-scroll to="#page-down"><i className="fa fa-chevron-circle-down animated bounce"></i></Link>
        </div>
    </div>
</div>

)

export default Hero