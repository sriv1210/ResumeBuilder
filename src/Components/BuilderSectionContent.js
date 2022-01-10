import React, { Component } from 'react'
import BuilderSectionSaveButton from './BuilderSectionSaveButton'

export default class BuilderSectionContent extends Component {
    constructor() {
        super();
        this.state = {
            name: '', objective: '', skills: '', phone: '', email: '', link: '', job1: '', company1: '',
            job1start: '', job1end: '', job1desc: '', job2: '', company2: '', job2start: '', job2end: '', job2desc: '',
            degree1: '', school1: '', school1start: '', school1end: '', school1desc: '',
            degree2: '', school2: '', school2start: '', school2end: '', school2desc: ''
        }
    }
    handleChangename = (event) => {
        this.setState({ name: event.target.value });
    }
    handleChangeobjective = (event) => {
        this.setState({ objective: event.target.value });
    }
    handleChangeskills = (event) => {
        this.setState({ skills: event.target.value });
    }
    handleChangephone = (event) => {
        this.setState({ phone: event.target.value });
    }
    handleChangeemail = (event) => {
        this.setState({ email: event.target.value });
    }
    handleChangelink = (event) => {
        this.setState({ link: event.target.value });
    }
    handleChangejob1 = (event) => {
        this.setState({ job1: event.target.value });
    }
    handleChangecompany1 = (event) => {
        this.setState({ company1: event.target.value });
    }
    handleChangejob1start = (event) => {
        this.setState({ job1start: event.target.value });
    }
    handleChangejob1end = (event) => {
        this.setState({ job1end: event.target.value });
    }
    handleChangejob1desc = (event) => {
        this.setState({ job1desc: event.target.value });
    }
    handleChangejob2 = (event) => {
        this.setState({ job2: event.target.value });
    }
    handleChangecompany2 = (event) => {
        this.setState({ company2: event.target.value });
    }
    handleChangejob2start = (event) => {
        this.setState({ job2start: event.target.value });
    }
    handleChangejob2end = (event) => {
        this.setState({ job2end: event.target.value });
    }
    handleChangejob2desc = (event) => {
        this.setState({ job2desc: event.target.value });
    }
    handleChangedegree1 = (event) => {
        this.setState({ degree1: event.target.value });
    }
    handleChangeschool1 = (event) => {
        this.setState({ school1: event.target.value });
    }
    handleChangeschool1start = (event) => {
        this.setState({ school1start: event.target.value });
    }
    handleChangeschool1end = (event) => {
        this.setState({ school1end: event.target.value });
    }
    handleChangeschool1desc = (event) => {
        this.setState({ school1desc: event.target.value });
    }
    handleChangedegree2 = (event) => {
        this.setState({ degree2: event.target.value });
    }
    handleChangeschool2 = (event) => {
        this.setState({ school2: event.target.value });
    }
    handleChangeschool2start = (event) => {
        this.setState({ school2start: event.target.value });
    }
    handleChangeschool2end = (event) => {
        this.setState({ school2end: event.target.value });
    }
    handleChangeschool2desc = (event) => {
        this.setState({ school2desc: event.target.value });
    }
    render() {
        return (
            <React.Fragment>
                <form>
                    <div className="row">
                        <div className="col-lg-4 ms-auto">
                            <div className="lead">
                                {/* Name form group */}
                                <div className="form-group m-3">
                                    <label htmlFor="name">Name:</label>
                                    <input type="text" value={this.state.name} onChange={this.handleChangename} className="form-control" id="name" aria-describedby="nameHelp" placeholder="Enter name" />
                                    {/* <small id="nameHelp" className="form-text text-muted">We'll never share your details with anyone else.</small> */}
                                </div>
                                {/* Email */}
                                <div className="form-group m-3">
                                    <label htmlFor="exampleInputEmail1">Email address:</label>
                                    <input type="text" value={this.state.email} onChange={this.handleChangeemail} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                </div>
                                {/* Phone */}
                                <div className="form-group m-3">
                                    <label htmlFor="phone">Phone Number:</label>
                                    <input type="text" value={this.state.phone} onChange={this.handleChangephone} className="form-control" id="phone" aria-describedby="phoneHelp" placeholder="Enter phone number" />
                                    {/* <small id="nameHelp" className="form-text text-muted">We'll never share your details with anyone else.</small> */}
                                </div>
                                {/* Link */}
                                <div className="form-group m-3">
                                    <label htmlFor="githubid">Social Link:</label>
                                    <input type="text" value={this.state.link} onChange={this.handleChangelink} className="form-control" id="githubid" aria-describedby="githubHelp" placeholder="Enter Social Links" />
                                    {/* <input type="text" className="form-control mt-3" id="githublink" aria-describedby="githubHelp" placeholder="Enter Github Link" /> */}
                                    {/* <small id="nameHelp" className="form-text text-muted">We'll never share your details with anyone else.</small> */}
                                </div>
                                {/* Work Experience */}
                                <div className="form-group m-3">
                                    <label htmlFor="work">Work Experience:</label>
                                    {/* <button id="work" onClick={onworkAddBtnClick} className="btn"><i className="fa fa-plus-circle"></i></button> */}
                                    {/* Company 1 Deatils */}
                                    <div>
                                    <label htmlFor="company1id">Company 1:</label>
                                    <input type="text" value={this.state.company1} onChange={this.handleChangecompany1} className="form-control" id="company1id" aria-describedby="company1Help" placeholder="Enter Company1 Name" />
                                    <label htmlFor="designation1id">Designation:</label>
                                    <input type="text" value={this.state.job1} onChange={this.handleChangejob1} className="form-control" id="designation1id" aria-describedby="designation1Help" placeholder="Enter Designation" />
                                    <label htmlFor="startyear1">Start Year:</label>
                                    <input type="text" value={this.state.job1start} onChange={this.handleChangejob1start} className="form-control" id="startyear1" aria-describedby="startyear1Help" placeholder="Enter Start year" />
                                    <label htmlFor="endyear1">End Year:</label>
                                    <input type="text" value={this.state.job1end} onChange={this.handleChangejob1end} className="form-control" id="endyear1" aria-describedby="endyear1Help" placeholder="Enter End year" />
                                    <label htmlFor="company1desc">Description:</label>
                                    <textarea value={this.state.job1desc} onChange={this.handleChangejob1desc} className="form-control" id="company1desc" rows="4"></textarea>
                                    
                                    </div>
                                    
                                    {/* Company 2 Details */}
                                    <div>
                                    <label htmlFor="company2id">Company 2:</label>
                                    <input type="text" value={this.state.company2} onChange={this.handleChangecompany2} className="form-control" id="company2id" aria-describedby="company2Help" placeholder="Enter Company2 Name" />
                                    <label htmlFor="designation2id">Designation:</label>
                                    <input type="text" value={this.state.job2} onChange={this.handleChangejob2} className="form-control" id="designation2id" aria-describedby="designation2Help" placeholder="Enter Designation" />
                                    <label htmlFor="startyear2">Start Year:</label>
                                    <input type="text" value={this.state.job2start} onChange={this.handleChangejob2start} className="form-control" id="startyear2" aria-describedby="startyear2Help" placeholder="Enter Start year" />
                                    <label htmlFor="endyear2">End Year:</label>
                                    <input type="text" value={this.state.job2end} onChange={this.handleChangejob2end} className="form-control" id="endyear2" aria-describedby="endyear2Help" placeholder="Enter End year" />
                                    <label htmlFor="company2desc">Description:</label>
                                    <textarea value={this.state.job2desc} onChange={this.handleChangejob2desc} className="form-control" id="company2desc" rows="4"></textarea>

                                    </div>
                                    
                                </div>



                            </div>
                        </div>


                        <div className="col-lg-4 me-auto">
                            <div className="lead">
                                {/* Summary form group */}
                                <div className="form-group m-3">
                                    <label htmlFor="objective">Objective:</label>
                                    <textarea value={this.state.objective} onChange={this.handleChangeobjective} className="form-control" id="objective" rows="4"></textarea>
                                </div>

                                {/* Skills and Proficiency */}
                                <div className="form-group m-3">
                                    <label htmlFor="skills">Skills and Proficiency:</label>
                                    <textarea value={this.state.skills} onChange={this.handleChangeskills} className="form-control" id="skills" rows="4"></textarea>
                                </div>
                                {/* Educational Background */}
                                <div className="form-group m-3">
                                    <label htmlFor="edu">Educational Background:</label>
                                    {/* School 1 Details */}
                                    <div>
                                    <label htmlFor="school1id">School 1:</label>
                                    <input type="text" value={this.state.school1} onChange={this.handleChangeschool1} className="form-control" id="school1id" aria-describedby="school1Help" placeholder="Enter school1 Name" />
                                    <label htmlFor="designation2id">Degree:</label>
                                    <input type="text" value={this.state.degree1} onChange={this.handleChangedegree1} className="form-control" id="designation2id" aria-describedby="designation2Help" placeholder="Enter Designation" />
                                    <label htmlFor="schoolstartyear1">Start Year:</label>
                                    <input type="text" value={this.state.school1start} onChange={this.handleChangeschool1start} className="form-control" id="schoolstartyear1" aria-describedby="schoolstartyear1Help" placeholder="Enter Start year" />
                                    <label htmlFor="schoolendyear1">End Year:</label>
                                    <input value={this.state.school1end} onChange={this.handleChangeschool1end} type="text" className="form-control" id="schoolendyear1" aria-describedby="schoolendyear1Help" placeholder="Enter End year" />
                                    <label htmlFor="school1desc">Description:</label>
                                    <textarea value={this.state.school1desc} onChange={this.handleChangeschool1desc} className="form-control" id="school1desc" rows="4"></textarea>

                                    </div>
                                    
                                    {/* School 2 Details */}
                                    <div>
                                    <label htmlFor="school2id">School 2:</label>
                                    <input type="text" value={this.state.school2} onChange={this.handleChangeschool2} className="form-control" id="school2id" aria-describedby="school2Help" placeholder="Enter school2 Name" />
                                    <label htmlFor="designation2id">Degree:</label>
                                    <input type="text" value={this.state.degree2} onChange={this.handleChangedegree2} className="form-control" id="designation2id" aria-describedby="designation2Help" placeholder="Enter Designation" />
                                    <label htmlFor="schoolstartyear2">Start Year:</label>
                                    <input type="text" value={this.state.school2start} onChange={this.handleChangeschool2start} className="form-control" id="schoolstartyear2" aria-describedby="schoolstartyear2Help" placeholder="Enter Start year" />
                                    <label htmlFor="schoolendyear2">End Year:</label>
                                    <input value={this.state.school2end} onChange={this.handleChangeschool2end} type="text" className="form-control" id="schoolendyear2" aria-describedby="schoolendyear2Help" placeholder="Enter End year" />
                                    <label htmlFor="school2desc">Description:</label>
                                    <textarea value={this.state.school2desc} onChange={this.handleChangeschool2desc} className="form-control" id="school2desc" rows="4"></textarea>

                                    </div>
                                    

                                </div>
                            </div>
                        </div>



                    </div>
                </form>
                <BuilderSectionSaveButton name={this.state.name} objective={this.state.objective}
                    skills={this.state.skills} phone={this.state.phone} email={this.state.email} link={this.state.link} job1={this.state.job1}
                    company1={this.state.company2} job1start={this.state.job1start} job1end={this.state.job1end} job1desc={this.state.job1desc}
                    job2={this.state.job2} company2={this.state.company2} job2start={this.state.job2start} job2end={this.state.job2end}
                    job2desc={this.state.job2desc} degree1={this.state.degree1} school1={this.state.school1} school1start={this.state.school1start}
                    school1end={this.state.school1end} school1desc={this.state.school1desc} degree2={this.state.degree2} school2={this.state.school2}
                    school2start={this.state.school2start} school2end={this.state.school2end} school2desc={this.state.school2desc} />
            </React.Fragment>
        )
    }
}
