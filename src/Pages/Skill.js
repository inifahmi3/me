import React, { Component } from "react";

class Skill extends Component {
    render() {
        return (
            <section id="skill">
                <h1>Skill</h1>
                <div className="container">
                    <div className="row scroll-horizontal">
                        <div className="col-lg-2 col-md-3 col-sm-6">
                            <div className="box">
                                <i className="fab fa-5x fa-html5"></i>
                                <p>Lorem ipsum</p>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-6">
                            <div className="box">
                                <i className="fab fa-5x fa-css3"></i>
                                <p>Lorem ipsum</p>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-6">
                            <div className="box">
                                <i className="fab fa-5x fa-js"></i>
                                <p>Lorem ipsum</p>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-6">
                            <div className="box">
                                <i className="fab fa-5x fa-php"></i>
                                <p>Lorem ipsum</p>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-6">
                            <div className="box">
                                <i className="fab fa-5x fa-react"></i>
                                <p>Lorem ipsum</p>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-6">
                            <div className="box">
                                <i className="fa fa-5x fa-cubes"></i>
                                <p>Lorem ipsum</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Skill