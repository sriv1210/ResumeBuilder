import React, { Component } from 'react'
import ChooseTemplate from './ChooseTemplate'

export default class BuilderSectionContent extends Component {
    constructor() {
        super();
        
        this.state = {details: {
            fullname: '',role:'', objective: '', skills: '', phone: '',
            email: '', link: '', job1: '', company1: '',
            job1start: '', job1end: '', job1desc: '',
            job2: '', company2: '', job2start: '',
            job2end: '', job2desc: '',
            degree1: '', school1: '',
            school1start: '', school1end: '', school1desc: '',
            degree2: '', school2: '', school2start: '',
            school2end: '', school2desc: ''
    
        }}
    }
    handleChange = (textrecieved)=>{
        return event => {
            this.setState(({ details }) => ({
              details: { ...details, [textrecieved]: event.target.value }
            }));
          };
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
                                    <input type="text" value={this.state.details["fullname"]} onChange={this.handleChange("fullname")} className="form-control" id="name" aria-describedby="nameHelp" placeholder="Enter name" />
                                    {/* <small id="nameHelp" className="form-text text-muted">We'll never share your details with anyone else.</small> */}
                                </div>
                                {/* Current Role */}
                                <div className="form-group m-3">
                                    <label htmlFor="role">Role:</label>
                                    <input type="text" value={this.state.details["role"]} onChange={this.handleChange("role")} className="form-control" id="role" aria-describedby="roleHelp" placeholder="Enter role" />
                                    {/* <small id="nameHelp" className="form-text text-muted">We'll never share your details with anyone else.</small> */}
                                </div>
                                {/* Email */}
                                <div className="form-group m-3">
                                    <label htmlFor="exampleInputEmail1">Email address:</label>
                                    <input type="text" value={this.state.details["email"]} onChange={this.handleChange("email")} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                </div>
                                {/* Phone */}
                                <div className="form-group m-3">
                                    <label htmlFor="phone">Phone Number:</label>
                                    <input type="text" value={this.state.details["phone"]} onChange={this.handleChange("phone")} className="form-control" id="phone" aria-describedby="phoneHelp" placeholder="Enter phone number" />
                                    {/* <small id="nameHelp" className="form-text text-muted">We'll never share your details with anyone else.</small> */}
                                </div>
                                {/* Link */}
                                <div className="form-group m-3">
                                    <label htmlFor="githubid">Social Link:</label>
                                    <input type="text" value={this.state.details["link"]} onChange={this.handleChange("link")} className="form-control" id="githubid" aria-describedby="githubHelp" placeholder="Enter Social Links" />
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
                                    <input type="text" value={this.state.details["company1"]} onChange={this.handleChange("company1")} className="form-control" id="company1id" aria-describedby="company1Help" placeholder="Enter Company1 Name" />
                                    <label htmlFor="designation1id">Designation:</label>
                                    <input type="text" value={this.state.details["job1"]} onChange={this.handleChange("job1")} className="form-control" id="designation1id" aria-describedby="designation1Help" placeholder="Enter Designation" />
                                    <label htmlFor="startyear1">Start Year:</label>
                                    <input type="text" value={this.state.details["job1start"]} onChange={this.handleChange("job1start")} className="form-control" id="startyear1" aria-describedby="startyear1Help" placeholder="Enter Start year" />
                                    <label htmlFor="endyear1">End Year:</label>
                                    <input type="text" value={this.state.details["job1end"]} onChange={this.handleChange("job1end")} className="form-control" id="endyear1" aria-describedby="endyear1Help" placeholder="Enter End year" />
                                    <label htmlFor="company1desc">Description:</label>
                                    <textarea value={this.state.details["job1desc"]} onChange={this.handleChange("job1desc")} className="form-control" id="company1desc" rows="4"></textarea>
                                    
                                    </div>
                                    
                                    {/* Company 2 Details */}
                                    <div>
                                    <label htmlFor="company2id">Company 2:</label>
                                    <input type="text" value={this.state.details["company2"]} onChange={this.handleChange("company2")} className="form-control" id="company2id" aria-describedby="company2Help" placeholder="Enter Company2 Name" />
                                    <label htmlFor="designation2id">Designation:</label>
                                    <input type="text" value={this.state.details["job2"]} onChange={this.handleChange("job2")} className="form-control" id="designation2id" aria-describedby="designation2Help" placeholder="Enter Designation" />
                                    <label htmlFor="startyear2">Start Year:</label>
                                    <input type="text" value={this.state.details["job2start"]} onChange={this.handleChange("job2start")} className="form-control" id="startyear2" aria-describedby="startyear2Help" placeholder="Enter Start year" />
                                    <label htmlFor="endyear2">End Year:</label>
                                    <input type="text" value={this.state.details["job2end"]} onChange={this.handleChange("job2end")} className="form-control" id="endyear2" aria-describedby="endyear2Help" placeholder="Enter End year" />
                                    <label htmlFor="company2desc">Description:</label>
                                    <textarea value={this.state.details["job2desc"]} onChange={this.handleChange("job2desc")} className="form-control" id="company2desc" rows="4"></textarea>

                                    </div>
                                    
                                </div>



                            </div>
                        </div>


                        <div className="col-lg-4 me-auto">
                            <div className="lead">
                                {/* Summary form group */}
                                <div className="form-group m-3">
                                    <label htmlFor="objective">Objective:</label>
                                    <textarea value={this.state.details["objective"]} onChange={this.handleChange("objective")} className="form-control" id="objective" rows="4"></textarea>
                                </div>

                                {/* Skills and Proficiency */}
                                <div className="form-group m-3">
                                    <label htmlFor="skills">Skills and Proficiency:</label>
                                    <textarea value={this.state.details["skills"]} onChange={this.handleChange("skills")} className="form-control" id="skills" rows="4"></textarea>
                                </div>
                                {/* Educational Background */}
                                <div className="form-group m-3">
                                    <label htmlFor="edu">Educational Background:</label>
                                    {/* School 1 Details */}
                                    <div>
                                    <label htmlFor="school1id">School 1:</label>
                                    <input type="text" value={this.state.details["school1"]} onChange={this.handleChange("school1")} className="form-control" id="school1id" aria-describedby="school1Help" placeholder="Enter school1 Name" />
                                    <label htmlFor="designation2id">Degree:</label>
                                    <input type="text" value={this.state.details["degree1"]} onChange={this.handleChange("degree1")} className="form-control" id="designation2id" aria-describedby="designation2Help" placeholder="Enter Designation" />
                                    <label htmlFor="schoolstartyear1">Start Year:</label>
                                    <input type="text" value={this.state.details["school1start"]} onChange={this.handleChange("school1start")} className="form-control" id="schoolstartyear1" aria-describedby="schoolstartyear1Help" placeholder="Enter Start year" />
                                    <label htmlFor="schoolendyear1">End Year:</label>
                                    <input value={this.state.details["school1end"]} onChange={this.handleChange("school1end")} type="text" className="form-control" id="schoolendyear1" aria-describedby="schoolendyear1Help" placeholder="Enter End year" />
                                    <label htmlFor="school1desc">Description:</label>
                                    <textarea value={this.state.details["school1desc"]} onChange={this.handleChange("school1desc")} className="form-control" id="school1desc" rows="4"></textarea>

                                    </div>
                                    
                                    {/* School 2 Details */}
                                    <div>
                                    <label htmlFor="school2id">School 2:</label>
                                    <input type="text" value={this.state.details["school2"]} onChange={this.handleChange("school2")} className="form-control" id="school2id" aria-describedby="school2Help" placeholder="Enter school2 Name" />
                                    <label htmlFor="designation2id">Degree:</label>
                                    <input type="text" value={this.state.details["degree2"]} onChange={this.handleChange("degree2")} className="form-control" id="designation2id" aria-describedby="designation2Help" placeholder="Enter Designation" />
                                    <label htmlFor="schoolstartyear2">Start Year:</label>
                                    <input type="text" value={this.state.details["school2start"]} onChange={this.handleChange("school2start")} className="form-control" id="schoolstartyear2" aria-describedby="schoolstartyear2Help" placeholder="Enter Start year" />
                                    <label htmlFor="schoolendyear2">End Year:</label>
                                    <input value={this.state.details["school2end"]} onChange={this.handleChange("school2end")} type="text" className="form-control" id="schoolendyear2" aria-describedby="schoolendyear2Help" placeholder="Enter End year" />
                                    <label htmlFor="school2desc">Description:</label>
                                    <textarea value={this.state.details["school2desc"]} onChange={this.handleChange("school2desc")} className="form-control" id="school2desc" rows="4"></textarea>

                                    </div>
                                    

                                </div>
                            </div>
                        </div>



                    </div>
                </form>
                <ChooseTemplate  details={this.state.details}/>
            </React.Fragment>
        )
    }
}
