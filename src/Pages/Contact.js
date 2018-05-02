import React, { Component } from "react";

class Contact extends Component {
    render() {
        return (
            <section id="contact">
                <h1>Contact</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <input type="text" className="form-control"/>
                                        <label>Name</label>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <input type="email" className="form-control"/>
                                        <label>Email</label>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <input type="text" className="form-control"/>
                                        <label>Subject</label>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <textarea rows="7" className="form-control"></textarea>
                                        <label>Message</label>
                                    </div>
                                </div>
                                <div className="col-lg-3 offset-lg-9">
                                    <button className="btn btn-primary btn-block">
                                        Send
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Contact