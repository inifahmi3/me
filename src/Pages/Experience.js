import React, { Component } from "react";
import API from "../Api/API";

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
                                {
                                    API.allExperience().map(p => (
                                        <div className="list" key={p.id}>
                                            <h4>{p.year}</h4>
                                            <div className="description">
                                                <p>{p.title}</p>
                                                <span>{p.as}</span>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Experience