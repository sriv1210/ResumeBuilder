import React, { Component } from 'react'
import IconDivider from './IconDivider'
import axios from 'axios'
import { saveAs } from 'file-saver';
import { API_URL } from '../constants';
export default class ChooseTemplate extends Component {
        
    generatepdf = (template) => {
       
        const data = {...this.props.details, template: template}   

        axios.post(API_URL+'/create-pdf', data)
            .then(
                () => axios.get(API_URL+'/fetch-pdf', { responseType: 'blob' }))
            .then((res) => {
                const pdfBlob = new Blob([res.data], { type: 'application/pdf' });

                saveAs(pdfBlob, 'Resume.pdf');
            });
    }
    render() {
        
        return (
            <React.Fragment>
                <div className="row">
                    <div className="editbtn m-3 text-center">
                        
                        <a className="btn btn-xl btn-outline-secondary m-3" href="#portfolio">
                            <i className="fas fa-choose me-2"></i>
                            Choose Template
                        </a>
                    </div>
                </div>
                <section id="portfolio">
                    <div className="container">
                        {/* <!-- Portfolio Section Heading--> */}
                        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Choose Resume Template</h2>
                        {/* <!-- Icon Divider--> */}
                        <IconDivider />
                        {/* <!-- Portfolio Grid Items--> */}
                        <div className="row justify-content-center">
                            {/* <!-- Portfolio Item 1--> */}
                            <div className="col-md-6 col-lg-4 mb-5">
                                <div className="portfolio-item mx-auto">
                                    <img className="img-fluid border border-primary" src={require('../Assets/Resume-1.png')} alt="..." />
                                </div>
                                <button onClick={() => this.generatepdf(1)} className="btn btn-xl btn-outline-primary m-3" >
                                    <i className="fas fa-download me-2"></i>
                                    Download
                                </button>
                            </div>
                            {/* <!-- Portfolio Item 1--> */}
                            <div className="col-md-6 col-lg-4 mb-5">
                                <div className="portfolio-item mx-auto">
                                    <img className="img-fluid border border-primary" src={require('../Assets/Resume-2.png')} alt="..." />
                                </div>
                                <button onClick={() => this.generatepdf(2)} className="btn btn-xl btn-outline-primary m-3" >
                                    <i className="fas fa-download me-2"></i>
                                    Download
                                </button>
                            </div>
                            {/* <!-- Portfolio Item 1--> */}
                            <div className="col-md-6 col-lg-4 mb-5">
                                <div className="portfolio-item mx-auto">
                                    <img className="img-fluid border border-primary" src={require('../Assets/Resume-3.png')} alt="..." />
                                </div>
                                <button onClick={() => this.generatepdf(3)} className="btn btn-xl btn-outline-primary m-3" >
                                    <i className="fas fa-download me-2"></i>
                                    Download
                                </button>
                            </div>
                            {/* <!-- Portfolio Item 1--> */}
                            <div className="col-md-6 col-lg-4 mb-5">
                                <div className="portfolio-item mx-auto">
                                    <img className="img-fluid border border-primary" src={require('../Assets/Resume-4.png')} alt="..." />
                                </div>
                                <button onClick={() => this.generatepdf(4)} className="btn btn-xl btn-outline-primary m-3" >
                                    <i className="fas fa-download me-2"></i>
                                    Download
                                </button>
                            </div>
                            {/* <!-- Portfolio Item 1--> */}
                            <div className="col-md-6 col-lg-4 mb-5">
                                <div className="portfolio-item mx-auto">
                                    <img className="img-fluid border border-primary" src={require('../Assets/Resume-5.png')} alt="..." />
                                </div>
                                <button onClick={() => this.generatepdf(5)} className="btn btn-xl btn-outline-primary m-3" >
                                    <i className="fas fa-download me-2"></i>
                                    Download
                                </button>
                            </div>
                            {/* <!-- Portfolio Item 1--> */}
                            <div className="col-md-6 col-lg-4 mb-5">
                                <div className="portfolio-item mx-auto">
                                    <img className="img-fluid border border-primary" src={require('../Assets/Resume-6.png')} alt="..." />
                                </div>
                                <button onClick={() => this.generatepdf(6)} className="btn btn-xl btn-outline-primary m-3"  >
                                    <i className="fas fa-download me-2"></i>
                                    Download
                                </button>
                            </div>
                        </div>
                    </div>

                </section>
            </React.Fragment >



        )
    }
}
