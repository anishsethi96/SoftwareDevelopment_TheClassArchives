import React, { Component } from "react";
import LoginDataService from "../services/login.service";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class Home extends Component {

  render() {
    return (
        <div>
        <div class="container">
          <div class="row justify-content-center">
            <h2> Instructions </h2>
            <br/>
            <p class="text-center">
              Testblock Testblock Testblock Testblock Testblock Testblock Testblock Testblock Testblock Testblock Testblock Testblock
              Testblock Testblock Testblock Testblock Testblock Testblock Testblock Testblock Testblock Testblock Testblock Testblock
              Testblock Testblock Testblock Testblock Testblock Testblock Testblock Testblock Testblock Testblock Testblock Testblock
              Testblock Testblock Testblock Testblock Testblock Testblock Testblock Testblock Testblock Testblock Testblock Testblock
            </p>
          </div>

          <div class="row justify-content-center">
            <button type="button" class="btn btn-outline-primary">
              <Link to = {"/create"} params={{ testvalue: "hello" }} style={{ textDecoration: 'none'}}>
                Sign up
              </Link>
            </button>
            <button type="button" class="btn btn-outline-primary">
              <Link to = {"/login"} style={{ textDecoration: 'none'}}>
                Login
              </Link>
            </button>
          </div>
        </div>
        </div>
    );
  }
}
