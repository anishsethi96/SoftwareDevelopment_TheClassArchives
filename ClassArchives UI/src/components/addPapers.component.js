import React, { Component } from "react";
import CreatePaperDataService from "../services/addPapers.service";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../App.css";

export default class AddPapers extends Component {
  constructor(props) {
    super(props);
    this.onChangeCourseID = this.onChangeCourseID.bind(this);
    this.onChangeRCSID = this.onChangeRCSID.bind(this);
    this.onChangeTitleName = this.onChangeTitleName.bind(this);
    this.onChangeType = this.onChangeType.bind(this);
    this.onChangeGrade = this.onChangeGrade.bind(this);
    this.onChangeProfessorFName = this.onChangeProfessorFName.bind(this);
    this.onChangeProfessorLName = this.onChangeProfessorLName.bind(this);
    this.onChangePaperYear = this.onChangePaperYear.bind(this);
    this.onChangeDocLink = this.onChangeDocLink.bind(this);
    this.savePaperInfo = this.savePaperInfo.bind(this);

    this.state = {
      course_id: "",
      rcs_id: "",
      title_name: "",
      type_name: "",
      grade_percentage: "",
      professor_first_name: "",
      professor_last_name: "",
      paper_year: "",
      doc_link: "",
      submitted: false
    };
  }

  onChangeCourseID(e) {
    this.setState({
      course_id: e.target.value
    });
  }

  onChangeRCSID(e) {
    this.setState({
      rcs_id: e.target.value
    });
  }

  onChangeTitleName(e) {
    this.setState({
      title_name: e.target.value
    });
  }

  onChangeType(e) {
    this.setState({
      type_name: e.target.value
    });
  }

  onChangeGrade(e) {
    this.setState({
      grade_percentage: e.target.value
    });
  }

  onChangeProfessorFName(e) {
    this.setState({
      professor_first_name: e.target.value
    });
  }

  onChangeProfessorLName(e) {
    this.setState({
      professor_last_name: e.target.value
    });
  }

  onChangePaperYear(e) {
    this.setState({
      paper_year: e.target.value
    });
  }

  onChangeDocLink(e) {
    this.setState({
      doc_link: e.target.value
    });
  }

  savePaperInfo() {
  var data = {
  course_id: this.state.course_id,
  rcs_id: this.state.rcs_id,
  title_name: this.state.title_name,
  type_name: this.state.type_name,
  grade_percentage: this.state.grade_percentage,
  professor_first_name: this.state.professor_first_name,
  professor_last_name: this.state.professor_last_name,
  paper_year: this.state.paper_year,
  doc_link: this.state.doc_link
  };

  CreatePaperDataService.create(data)
  this.setState({submitted: true});
  window.location.reload(false);
  }

  render() {
    return (      <div class="card card-2">
        <div class="card-heading"></div>
        <div class="card-body">
          <h3> Enter details about the submission</h3>
          <div>
            <div class="input-group">
              <input type="text"  class="input--style-2" placeholder="Enter Course ID" id="course_id" maxLength="127" required value={this.state.course_id} onChange={this.onChangeCourseID} name="course_id"/>
            </div>

            <div class="input-group">
              <input type="text"  class="input--style-2" placeholder="Enter RCS ID" id="rcs_id" maxLength="7" required value={this.state.rcs_id} onChange={this.onChangeRCSID} name="rcs_id" />
            </div>

            <div class="input-group">
              <input type="text"  class="input--style-2" placeholder="Enter Paper Title" id="title_name" maxLength="127" required value={this.state.title_name} onChange={this.onChangeTitleName} name="title_name"/>
            </div>

            <div class="input-group">
              <input type="text"  class="input--style-2" placeholder="Enter Paper Type" id="type_name" maxLength="127" required value={this.state.type_name} onChange={this.onChangeType} name="type_name"/>
            </div>

            <div class="input-group">
              <input type="number"  class="input--style-2" placeholder="Enter Percentage Grade (Optional)" id="grade_percentage" maxLength="4" required value={this.state.grade_percentage} onChange={this.onChangeGrade} name="grade_percentage"/>
            </div>

            <div class="input-group">
              <input type="text"  class="input--style-2" placeholder="Enter Professor First Name" id="professor_first_name" maxLength="127" required value={this.state.professor_first_name} onChange={this.onChangeProfessorFName} name="professor_first_name"/>
            </div>

            <div class="input-group">
              <input type="text"  class="input--style-2" placeholder="Enter Professor Last Name" id="professor_last_name" maxLength="127" required value={this.state.professor_last_name} onChange={this.onChangeProfessorLName} name="professor_last_name"/>
            </div>

            <div class="input-group">
              <input type="text"  class="input--style-2" placeholder="Enter year" id="paper_year" maxLength="4" required value={this.state.paper_year} onChange={this.onChangePaperYear} name="paper_year"/>
            </div>

            <div class="input-group">
              <input type="text"  class="input--style-2" placeholder="Enter Doc Link" id="doc_link" maxLength="127" required value={this.state.doc_link} onChange={this.onChangeDocLink} name="doc_link"/>
            </div>

            <button onClick={this.savePaperInfo} class="btn btn--radius btn--green">
              Submit
            </button>

            <button class="btn btn--radius btn--green">
              <Link to = {"/search"} style={{ textDecoration: 'none', color: "white"}}>
                Find Paper
              </Link>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
