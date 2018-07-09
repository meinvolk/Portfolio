import React, { Component }  from 'react'
import Link from 'gatsby-link'

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="list-icons">
                    <Link to="https://www.linkedin.com/in/william-bensinger-506734129/" target="_blank"><i className="fa fa-linkedin"></i></Link>
                    <Link to="https://github.com/meinvolk" target="_blank"><i className="fa fa-github"></i></Link>
                    <Link to="https://www.instagram.com/bensingerbilly/" target="_blank"><i className="fa fa-instagram"></i></Link>
                    <Link to="https://www.facebook.com/billy.bensinger.9" target="_blank"><i className="fa fa-facebook-f"></i></Link>
                </div>
            </footer>
        );
    }
};

module.exports = Footer