import React, { Component }  from 'react'
import Link from 'gatsby-link'
import { goToTop } from 'react-scrollable-anchor'

class Navigation extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            isGreaterThan700: false 
        };
        this.updateStatesBasedOnWindowSize = this.updateStatesBasedOnWindowSize.bind(this)
        this.state = { smallDeviceNavigation: false }
    }

    componentWillMount() {
        this.updateStatesBasedOnWindowSize();
    }
    componentDidMount() {
        this.updateStatesBasedOnWindowSize();
        window.addEventListener('scroll', this.listenScrollEvent)
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

    listenScrollEvent = e => {
        if(this.props.pageType === 'home-page'){
            if (window.scrollY > 600) {
                this.setState({isGreaterThan700: true})
            } else {
                this.setState({isGreaterThan700: false})
            }
        }
        else {
            this.setState({isGreaterThan700: true})
        }
    }

    render() {
        let navItems = ['Skills','Work','About','Contact'];
        let cssColor = this.state.isGreaterThan700 ? 'black' : 'white';
        return(
            <div>
                <header className={this.state.smallDeviceNavigation ? 'mobile-nav' : 'desktop-nav'} 
                        style={this.state.isGreaterThan700 ? whiteHeader: darkHeader}>
                    {
                        this.state.smallDeviceNavigation 
                        ? <MobileNav navItems={navItems}  color={cssColor} /> 
                        : <DesktopNav navItems={navItems} color={cssColor} />
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
        let menuColor = this.props.color === 'white' ? whiteMenu : darkMenu;
        let menuOpen = this.state.checked === 'checked';
        if(menuOpen) menuColor = redMenu;
        return (
            <nav role="navigation">
                <div id="menuToggle">
                
                    <nav onClick={() => this.toggleDisplay()} className={this.state.checked} />

                    <span style={menuColor}></span>
                    <span style={menuColor}></span>
                    <span style={menuColor}></span>
                    
                    <ul id="menu" style={{display: this.state.display}}>
                        <a href='/#home' onClick={() => this.toggleDisplay()}>
                            <li className="animated slideInDown">Home</li>
                        </a>
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
        let headerFontColor = this.props.color === 'white' ? whiteFont : darkFont;
        return (
            <ul>
                <li className="animated slideInDown"><a href='/#home' style={headerFontColor}>Home</a></li>
                {this.props.navItems.map((item) => (
                    <li className="animated slideInDown" key={item}>
                        <a href={'/#' + item} style={headerFontColor}>{item}</a>
                    </li>
                ))}
            </ul>
        );
    }
};

const whiteHeader = {
    backgroundColor: 'rgba(255, 255, 255, 0.6)'
};
const darkHeader = {
    backgroundColor: 'rgba(0, 0, 0, 0.6)'
};
const whiteFont = {
    color: '#ffffff'
};
const darkFont = {
    color: '#282828'
};
const whiteMenu = {
    backgroundColor: '#ffffff'
};
const darkMenu = {
    backgroundColor: '#282828'
};
const redMenu = {
    backgroundColor: '#FF686B'
};