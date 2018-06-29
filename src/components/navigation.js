import React from 'react'
import Link from 'gatsby-link'

const Navigation = () => (
    <header>
        <div>
            <ul>
                <li className="animated slideInDown"><Link to="/">Home</Link></li>
                <li className="animated slideInDown"><Link to="/page-2">About</Link></li>
                <li className="animated slideInDown"><Link to="/">Skills</Link></li>
                <li className="animated slideInDown"><Link to="/">Work</Link></li>
                <li className="animated slideInDown"><Link to="/">Contact</Link></li>
            </ul>
        </div>
    </header>
)

export default Navigation