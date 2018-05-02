import React, { Component } from "react";
import Scrollspy from 'react-scrollspy';


class Navbar extends Component {
    render() {
        return (
            <div>
                <div className="hamb">
                    <i></i>
                </div>
                <nav className="navbar navbar-expand-sm fixed-top">
                    <div className="container">
                        <a className="navbar-brand goto" href="#header">This is MI</a>
                        <div className="navbar-collapse">
                            <Scrollspy items={['about', 'skill', 'education', 'experience', 'portfolio', 'contact']} currentClassName='active' className="navbar-nav ml-auto">
                            {/* <ul className="navbar-nav ml-auto"> */}
                                <li className="nav-item text-center">
                                    <a className="nav-link goto" href="#about">About</a>
                                </li>
                                <li className="nav-item text-center">
                                    <a className="nav-link goto" href="#skill">Skill</a>
                                </li>
                                <li className="nav-item text-center">
                                    <a className="nav-link goto" href="#education">Education</a>
                                </li>
                                <li className="nav-item text-center">
                                    <a className="nav-link goto" href="#experience">Experience</a>
                                </li>
                                <li className="nav-item text-center">
                                    <a className="nav-link goto" href="#portfolio">Portfolio</a>
                                </li>
                                <li className="nav-item text-center">
                                    <a className="nav-link goto" href="#contact">Contact</a>
                                </li>
                            {/* </ul> */}
                            </Scrollspy>
                        </div>
                    </div>
                </nav>
                <a href="#header" className="backToTop goto">
                    <div className="fa fa-chevron-up"></div>
                </a>
            </div>
        );
    }
}

export default Navbar