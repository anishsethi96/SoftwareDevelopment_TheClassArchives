import React, { Component } from "react";
import "../main.css";
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
        <div className="card card-2">
          <div class="card-heading"></div>
          <div class="card-body">
            <h2> Account created </h2>
            <br/>
            <button class="btn btn--radius btn--green">
            <Link to = {"/"} params={{ testvalue: "hello" }} style={{ textDecoration: 'none', color: "white"}}>
              Login Now
            </Link>
            </button>
          </div>
        </div>
      ) : (
      <div className="card card-2">
        <div class="card-heading"></div>
          <div class="card-body">
          <h3 class="title"> Create a new account </h3>

            <div className="input-group">
              <input type="text" class="input--style-2" placeholder="RCS ID" id="rcs_id" maxLength="7" required value={this.state.rcs_id} onChange={this.onChangeRCSID} name="rcs_id"/>
            </div>

            <div className="input-group">
              <input type="text" class="input--style-2" placeholder="First Name" id="first_name" maxLength="127" required value={this.state.first_name} onChange={this.onChangeFirstName} name="first_name"/>
            </div>

            <div className="input-group">
              <input type="text" class="input--style-2" placeholder="Last Name" id="last_name" maxLength="127" required value={this.state.last_name} onChange={this.onChangeLastName} name="last_name"/>
            </div>

            <div className="input-group">
              <input type="password" class="input--style-2" placeholder="Password" id="password" maxLength="127" required value={this.state.password} onChange={this.onChangePassword} name="password" />
            </div>

            <div className="input-group">
              <input type="text" class="input--style-2" placeholder="Department Code" id="dept_code" maxLength="4" required value={this.state.dept_code} onChange={this.onChangeDeptCode} name="dept_code"/>
            </div>

            <button onClick={this.saveStudentInfo} class="btn btn--radius btn--green">
              Submit
            </button>
          </div>
          </div>
        )}
      </div>
    );
  }
}
