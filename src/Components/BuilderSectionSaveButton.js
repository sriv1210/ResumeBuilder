import React, { Component } from 'react'
import IconDivider from './IconDivider'
import axios from 'axios'
import { saveAs } from 'file-saver';
export default class BuilderSectionSaveButton extends Component {
    generatepdf = (template) => {
        const data = {
            name: this.props.name, objective: this.props.objective, skills: this.props.skills, phone: this.props.phone,
            email: this.props.email, link: this.props.link, job1: this.props.job1, company1: this.props.company1,
            job1start: this.props.job1start, job1end: this.props.job1end, job1desc: this.props.job1desc,
            job2: this.props.job2, company2: this.props.company2, job2start: this.props.job2start,
            job2end: this.props.job2end, job2desc: this.props.job2desc,
            degree1: this.props.degree1, school1: this.props.school1,
            school1start: this.props.school1start, school1end: this.props.school1end, school1desc: this.props.school1desc,
            degree2: this.props.degree2, school2: this.props.school2, school2start: this.props.school2start,
            school2end: this.props.school2end, school2desc: this.props.school2desc, template
        }

        axios.post('https://firstimpression-be.herokuapp.com/create-pdf', data)
            .then(
                () => axios.get('https://firstimpression-be.herokuapp.com/fetch-pdf', { responseType: 'blob' }))
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
                        <button onClick={() => this.generatepdf(1)} className="btn btn-xl btn-outline-secondary m-3" href="#portfolio" >
                            <i className="fas fa-save me-2"></i>
                            Save
                        </button>


                        <a className="btn btn-xl btn-outline-secondary m-3" href="#portfolio">
                            <i className="fas fa-choose me-2"></i>
                            Choose Template
                        </a>
                    </div>
                </div>
                <section>
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
                                <button onClick={() => this.generatepdf(1)} className="btn btn-xl btn-outline-primary m-3" href="#portfolio" >
                                    <i className="fas fa-download me-2"></i>
                                    Download
                                </button>
                            </div>
                            {/* <!-- Portfolio Item 1--> */}
                            <div className="col-md-6 col-lg-4 mb-5">
                                <div className="portfolio-item mx-auto">
                                    <img className="img-fluid border border-primary" src={require('../Assets/Resume-2.png')} alt="..." />
                                </div>
                                <button onClick={() => this.generatepdf(2)} className="btn btn-xl btn-outline-primary m-3" href="#portfolio" >
                                    <i className="fas fa-download me-2"></i>
                                    Download
                                </button>
                            </div>
                            {/* <!-- Portfolio Item 1--> */}
                            <div className="col-md-6 col-lg-4 mb-5">
                                <div className="portfolio-item mx-auto">
                                    <img className="img-fluid border border-primary" src={require('../Assets/Resume-3.png')} alt="..." />
                                </div>
                                <button onClick={() => this.generatepdf(3)} className="btn btn-xl btn-outline-primary m-3" href="#portfolio" >
                                    <i className="fas fa-download me-2"></i>
                                    Download
                                </button>
                            </div>
                            {/* <!-- Portfolio Item 1--> */}
                            <div className="col-md-6 col-lg-4 mb-5">
                                <div className="portfolio-item mx-auto">
                                    <img className="img-fluid border border-primary" src={require('../Assets/Resume-4.png')} alt="..." />
                                </div>
                                <button onClick={() => this.generatepdf(4)} className="btn btn-xl btn-outline-primary m-3" href="#portfolio" >
                                    <i className="fas fa-download me-2"></i>
                                    Download
                                </button>
                            </div>
                            {/* <!-- Portfolio Item 1--> */}
                            <div className="col-md-6 col-lg-4 mb-5">
                                <div className="portfolio-item mx-auto">
                                    <img className="img-fluid border border-primary" src={require('../Assets/Resume-5.png')} alt="..." />
                                </div>
                                <button onClick={() => this.generatepdf(5)} className="btn btn-xl btn-outline-primary m-3" href="#portfolio" >
                                    <i className="fas fa-download me-2"></i>
                                    Download
                                </button>
                            </div>
                            {/* <!-- Portfolio Item 1--> */}
                            <div className="col-md-6 col-lg-4 mb-5">
                                <div className="portfolio-item mx-auto">
                                    <img className="img-fluid border border-primary" src={require('../Assets/Resume-6.png')} alt="..." />
                                </div>
                                <button onClick={() => this.generatepdf(6)} className="btn btn-xl btn-outline-primary m-3" href="#portfolio" >
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
