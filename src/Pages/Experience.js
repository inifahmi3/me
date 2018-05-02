import React, { Component } from "react";

class Experience extends Component {
    render() {
        return (
            <section id="experience">
                <h1>Experience</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="timeline">
                                <div className="border-vertical"></div>
                                <div className="list">
                                    <h4>2010 - 2011</h4>
                                    <div className="description">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                        <span>Lorem ipsum dolor sit</span>
                                    </div>
                                </div>
                                <div className="list">
                                    <h4>2011 - Present</h4>
                                    <div className="description">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                        <span>Lorem ipsum dolor sit</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Experience