import React, { Component } from "react";
import SearchPaperDataService from "../services/searchPapers.service";
import { Link } from "react-router-dom";
import "../App.css";

export default class SearchPapers extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchPaper = this.onChangeSearchPaper.bind(this);
    this.setActiveSelection = this.setActiveSelection.bind(this);
    this.searchPaper = this.searchPaper.bind(this);

    this.state = {
      papers: [],
      selectedPaper: null,
      currentIndex: -1,
      searchPaper: ""
    };
  }

  onChangeSearchPaper(e) {
    const searchPaper = e.target.value;
    this.setState({
      searchPaper: searchPaper
    });
  }

  setActiveSelection(paper, index) {
    this.setState({
      selectedPaper: paper,
      currentIndex: index
    });
  }

  searchPaper() {
    SearchPaperDataService.get(this.state.searchPaper)
      .then(response => {
        this.setState({
          papers: response.data
        });

        if (response.data = []){
          alert('Course not available ');
          return;
        }

        console.log(response.data);
      })
      .catch(e => {
        alert('Enter Course ID');
        console.log(e);
      });
  }

  render() {
    const { searchPaper, papers, selectedPaper, currentIndex } = this.state;

    return (
      <div class="card card-2">
        <div class="card-heading"></div>
        <div class="card-body">
          <div class="col-md-8 mb-4">
            <div>
              <div class="input-group">
                <input type="text"  class="input--style-2" placeholder="Enter Course ID"value={searchPaper} onChange={this.onChangeSearchPaper} />
              </div>
              <button class="btn btn--radius btn--green" type="button" onClick={this.searchPaper}>
                Search
              </button>
            </div>
          </div>
          <div class="col-md-8">
            <h4>Available Resources</h4>
            <ul class="list-group">
              {papers && papers.map((paper, index) => (
                  <li class={ "list-group-item " + (index === currentIndex ? "active" : "")} onClick={() => this.setActiveSelection(paper, index)} key={index} >
                    {paper.title_name}
                  </li>
              ))}
            </ul>
          </div>
          <div class="col-md-8">
            {selectedPaper ? (
              <div class="mt-4">
                <h4>Paper Details</h4>
                <div>
                  <label> <strong> Title: </strong> </label>{" "} {selectedPaper.title_name}
                </div>
                <div>
                  <label> <strong> Uploaded by: </strong> </label>{" "}{selectedPaper.rcs_id}
                </div>
                <div>
                  <label> <strong> Professor Name: </strong> </label>{" "} {selectedPaper.professor_first_name + " " +selectedPaper.professor_last_name }
                </div>
                <div>
                  <label> <strong>Document Link</strong> </label>{" "} <a href = {selectedPaper.doc_link }> {selectedPaper.doc_link } </a>
                </div>
                <div>
                  <label> <strong> Grade Obtained: </strong> </label>{" "}{selectedPaper.grade_percentage}
                </div>
              </div>
            ) : (
              <div class="mb-4">
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
