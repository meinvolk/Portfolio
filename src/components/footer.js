import React, { Component }  from 'react'

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="list-icons">
                    <a href="https://www.linkedin.com/in/william-bensinger-506734129/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a>
                    <a href="https://github.com/meinvolk" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a>
                    <a href="https://www.instagram.com/bensingerbilly/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a>
                    <a href="https://www.facebook.com/billy.bensinger.9" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook-f"></i></a>
                </div>
            </footer>
        );
    }
};

export default Footer