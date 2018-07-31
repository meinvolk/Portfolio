import React, { Component }  from 'react'
import Link from 'gatsby-link'
import { goToTop } from 'react-scrollable-anchor'

class Navigation extends Component {
    constructor(props) {
        super(props)
        this.updateStatesBasedOnWindowSize =
          this.updateStatesBasedOnWindowSize.bind(this)
        this.state = { smallDeviceNavigation: false }
    }
    componentWillMount() {
        this.updateStatesBasedOnWindowSize()
    }
    componentDidMount() {
        window.addEventListener("resize", this.updateStatesBasedOnWindowSize)
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateStatesBasedOnWindowSize)
    }

    updateStatesBasedOnWindowSize() {
        const isClient = typeof window !== 'undefined';
        if(isClient){

            const w = window,
            d = document,
            documentElement = d.documentElement,
            body = d.getElementsByTagName('body')[0],
            width = w.innerWidth || 
                    documentElement.clientWidth || body.clientWidth

            if (width >= 770) {
                if (this.state.smallDeviceNavigation) {
                    this.setState({ smallDeviceNavigation: false })
                }
            } else {
                if (!this.state.smallDeviceNavigation) {
                    this.setState({ smallDeviceNavigation: true })
                }
            }
            
        }
    }

    render() {
        let navItems = ['Skills','Work','About','Contact'];
        return(
            <div>
                <header className={this.state.smallDeviceNavigation ? 'mobile-nav' : 'desktop-nav'} >
                    {
                        this.state.smallDeviceNavigation 
                        ? <MobileNav navItems={navItems} /> 
                        : <DesktopNav navItems={navItems} />
                    }
                </header>
            </div>
        );
    }
};

module.exports = Navigation

class MobileNav extends Component {
    constructor(props) {
        super(props);
        this.state = { display: 'none', checked: ''};
        this.toggleDisplay = this.toggleDisplay.bind(this);
    }
      
    toggleDisplay() {
        this.state.display === 'none' ? 
        this.setState({ display: 'block', checked: 'checked' }) :
        this.setState({ display: 'none', checked: '' }) ;
    }

    render() {
        return (
            <nav role="navigation">
                <div id="menuToggle">
                
                    <nav onClick={() => this.toggleDisplay()} className={this.state.checked} />

                    <span></span>
                    <span></span>
                    <span></span>
                    
                    <ul id="menu" style={{display: this.state.display}}>
                        <a href='/#home' onClick={() => this.toggleDisplay()}><li className="animated slideInDown">Home</li></a>
                        {this.props.navItems.map((item) => (
                            <a href={'/#' + item} key={item} onClick={() => this.toggleDisplay()}>
                                <li className="animated slideInDown">{item}</li>
                            </a>
                        ))}
                    </ul>
                </div>
            </nav>
        );
    }
};

class DesktopNav extends Component {
    render() {
        return (
            <ul>
                <li className="animated slideInDown"><a href='/#home'>Home</a></li>
                {this.props.navItems.map((item) => (
                    <li className="animated slideInDown" key={item}><a href={'/#' + item}>{item}</a></li>
                ))}
            </ul>
        );
    }
};