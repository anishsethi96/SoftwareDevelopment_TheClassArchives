import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CreateStudentDataService from "../services/createStudent.service";

export default class CreateStudent extends Component {
  constructor(props) {
    super(props);
    this.onChangeRCSID = this.onChangeRCSID.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeDeptCode = this.onChangeDeptCode.bind(this);
    this.saveStudentInfo = this.saveStudentInfo.bind(this);

    this.state = {
      rcs_id: "",
      password: "",
      first_name: "",
      last_name: "",
      dept_code: "",
      submitted: false
    };
  }

  onChangeRCSID(e) {
    this.setState({
      rcs_id: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  onChangeFirstName(e) {
    this.setState({
      first_name: e.target.value
    });
  }

  onChangeLastName(e) {
    this.setState({
      last_name: e.target.value
    });
  }
  onChangeDeptCode(e) {
    this.setState({
      dept_code: e.target.value
    });
  }

  onChangeCompany(e) {
    this.setState({
      company_name: e.target.value
    });
  }

  saveStudentInfo() {
    var data = {
      rcs_id: this.state.rcs_id,
      password: this.state.password,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      dept_code: this.state.dept_code,
      company_name: this.state.company_name
    };

    CreateStudentDataService.create(data)
    this.setState({submitted: true});
  }

  render() {
    return (
      <div className="submit-form">
      {this.state.submitted ? (
        <div>
        <h2> Account created </h2>
        <br/>
        <button className="btn btn-success" >
        <Link to = {"/login"} params={{ testvalue: "hello" }} style={{ textDecoration: 'none', color: "white"}}>
          Login Now
        </Link>
        </button>
        </div>
      ) : (
      <div className="submit-form">
        <h3> Create a new free account </h3>
          <div>
            <div className="form-group">
              <label htmlFor="title">RCS ID</label>
              <input type="text" className="form-control" id="rcs_id" maxLength="7" required value={this.state.rcs_id} onChange={this.onChangeRCSID} name="rcs_id"/>
            </div>

            <div className="form-group">
              <label htmlFor="description">Password</label>
              <input type="password" className="form-control" id="password" maxLength="127" required value={this.state.password} onChange={this.onChangePassword} name="password" />
            </div>

            <div className="form-group">
              <label htmlFor="title">First Name</label>
              <input type="text" className="form-control" id="first_name" maxLength="127" required value={this.state.first_name} onChange={this.onChangeFirstName} name="first_name"/>
            </div>

            <div className="form-group">
              <label htmlFor="title">Last Name</label>
              <input type="text" className="form-control" id="last_name" maxLength="127" required value={this.state.last_name} onChange={this.onChangeLastName} name="last_name"/>
            </div>

            <div className="form-group">
              <label htmlFor="title">Department</label>
              <input type="text" className="form-control" id="dept_code" maxLength="4" required value={this.state.dept_code} onChange={this.onChangeDeptCode} name="dept_code"/>
            </div>

            <button onClick={this.saveStudentInfo} className="btn btn-success">
              Submit
            </button>
          </div>
          </div>
        )}
      </div>
    );
  }
}
