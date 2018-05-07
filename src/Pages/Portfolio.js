import React, { Component } from "react";
import Time from "react-time";
import API from "../Api/API";

class Portfolio extends Component {
    render() {
        return (
            <section id="portfolio">
                <h1>Portfolio</h1>
                <div className="container">
                    <div className="row scroll-horizontal">
                        {
                            API.allPortfolio().map(p => (
                                <div className="col-lg-3" key={p.id}>
                                    <div className="box" style={{ backgroundImage: `url(${p.image})` }}>
                                        <h4><Time value={p.date} format="Y" /></h4>
                                        <p>{p.title}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        )
    }
}

export default Portfolio