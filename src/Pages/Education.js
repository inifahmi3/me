import React, { Component } from "react";
// import API from "../Api/API";
import axios from 'axios';

class Education extends Component {

    constructor() {
        super();
        this.state = {
            educations: []
        }
    }

    componentDidMount() {
        const self = this;
        axios({
            method: 'get',
            url: 'https://api.inifahmi.com/api/auth/educations',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjBlMjQ3MDA5MGNhYzAzYjFhNjAyMGY3MDY4OGIwMmYwZmNiMWI1OTgxMDFhODM0OWQ5ZWMwNzg0NDEzZGEyNjBkOTgyYjVlZmFmYjEwYjkzIn0.eyJhdWQiOiIxIiwianRpIjoiMGUyNDcwMDkwY2FjMDNiMWE2MDIwZjcwNjg4YjAyZjBmY2IxYjU5ODEwMWE4MzQ5ZDllYzA3ODQ0MTNkYTI2MGQ5ODJiNWVmYWZiMTBiOTMiLCJpYXQiOjE1MzQ4Mzg5NzcsIm5iZiI6MTUzNDgzODk3NywiZXhwIjoxNTY2Mzc0OTc3LCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.mhaqKauKEx4mShJs6F0lIA6U5UkDsXe-otSSIcaD34XD4ArXJ_F4PFjWwh5I68wncBIdnpSEhMYnaGvw03AF4cAbRTdmmiMj9nadL-ME4qG5CyOyBVa2vDE7pUTuH_JfeNHh074p9aLiPhrxT4LCedThcee79y5ZKQihGwL9AS1IOVFpxkD0TBAWEg10TU4s4WtS3WlixydjQgUhUTjQFmxIPkWoatS6bIoMFcH72j51PaMs9zIWN-_eJM1u8QgwXizpX2QP8NVNUhtlT6RMQV97sK8-MHysxQhmS4psXGKRjVQ6IerA8JCc7IZOM9qrd75-0VpGVD-XPPI4CFcPg1jL99rBmR8cPNpHs8pmREwDV8Ox_c-BP_cXYFTVjdW9TOXYmZOOM0i7Y5xge6TXa04ThNEsI1a1frl1i6CgoIPmRCIx0VI0laBjbUTo51KwcZow24eX-mN9YnmcPOVCeJFGyJMMn4AU_sA80T7J2ffS5GeC9QE-KM23iKEU6OIQbcBOOGGL2gHPXJ63SyTOqdcaipr7TyQfsMql0wHi1V-69z2FnsCLtlBoYsvR6lchfEtgGdmrGOW9OmOLU68Q--xmZhqti79_6Tzz6iRZxllHKiDgCuDXcYHKARNY5VU1apScjGRsGceLON6JiflPZHLiTQLI001TnhXCJrBUywE'
            }
        }).then(function(response){
            self.setState({educations: response.data})
        })
    }

    render() {
        return (
            <section id="education">
                <h1>Education</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="timeline">
                                <div className="border-vertical"></div>
                                {/* {
                                    API.allEducation().map(p => (
                                        <div className="list" key={p.id}>
                                            <h4>{p.year}</h4>
                                            <div className="description">
                                                <p>{p.title}</p>
                                            </div>
                                        </div>
                                    ))
                                } */}
                                {this.state.educations.map((p,key) => 
                                        <div className="list" key={key}>
                                            <h4>{p.graduation_year}</h4>
                                            <div className="description">
                                                <p>{p.school_name}</p>
                                            </div>
                                        </div>)}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Education