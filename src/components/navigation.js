import React, { Component }  from 'react'
import Link from 'gatsby-link'

class Navigation extends Component {
    render() {
        let navItems = ['Home','Skills','Work','About','Contact'];
        return(
            <header>
                <div>
                    <ul>
                        {navItems.map((item) => (
                            <li className="animated slideInDown" key={item}><Link to="/{item}">{item}</Link></li>
                        ))}
                    </ul>
                </div>
            </header>
        );
    }
};

module.exports = Navigation