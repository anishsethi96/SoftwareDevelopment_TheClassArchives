import React, { Component } from "react";
import LoginDataService from "../services/login.service";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class LoginUser extends Component {
  constructor(props) {
    super(props);
    this.onChangesearchUser = this.onChangesearchUser.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.searchUser = this.searchUser.bind(this);

  this.state = {
    userpass: "",
    uid: "",
    loginvalue: false
  };
}

onChangePassword(e) {
  this.setState({
    password: e.target.value
  });
}

onChangesearchUser(e) {
  const searchUser = e.target.value;
  this.setState({
    searchUser: searchUser
  });
}

searchUser() {
  var data = {
    password: this.state.password,
  };

  console.log(this.state.searchUser);

  LoginDataService.get(this.state.searchUser)
    .then(response => {
      this.setState({
        userpass: response.data
      });
      if (response.data === data.password) {
        this.setState({
          loginvalue: true
        });
    }
    })
    .catch(e => {
      console.log(e);
    });
}

  render() {
    const {searchUser} = this.state;
    return (
      <div className="submit-form">
        {this.state.loginvalue ? (
          <div className="card card-2">
            <div class="card-heading"></div>
            <div class="card-body">
              <h3> Welcome {this.state.searchUser}!</h3>
              <button className="btn btn-success" >
                <Link to = {"/add"} params={{ testvalue: "hello" }} style={{ textDecoration: 'none', color: "white"}}>
                  Add Paper
                </Link>
              </button>
              <button class="btn btn--radius btn--green">
                <Link to = {"/search"} style={{ textDecoration: 'none', color: "white"}}>
                  Find Paper
                </Link>
              </button>
            </div>
          </div>
        ) : (
          <div class="card card-2">
            <div class="card-heading"></div>
              <div class="card-body">
              <h3> Instructions</h3>
              <p>
                Testblock Testblock Testblock Testblock Testblock Testblock Testblock Testblock Testblock Testblock Testblock Testblock
                Testblock Testblock Testblock Testblock Testblock Testblock Testblock Testblock Testblock Testblock Testblock Testblock
                Testblock Testblock Testblock Testblock Testblock Testblock Testblock Testblock Testblock Testblock Testblock Testblock
                Testblock Testblock Testblock Testblock Testblock Testblock Testblock Testblock Testblock Testblock Testblock Testblock
              </p>
              <h3> Login to existing account</h3>

              <div class="input-group">
                <input type="text" class="input--style-2" placeholder="Enter RCS ID" maxLength="7" value={searchUser} onChange={this.onChangesearchUser}/>
              </div>

              <div className="input-group">
                <input type="password" class="input--style-2" placeholder="Password" id="password" maxLength="127" required value={this.state.password} onChange={this.onChangePassword} name="password" />
              </div>

              <button onClick={this.searchUser} className="btn btn-success" class="btn btn--radius btn--red">
                Login
              </button>

              <div>
              Not Registered? &nbsp;
                <Link to = {"/create"} style={{ textDecoration: 'none', color: "green"}}>
                  Sign Up Now
                </Link>
              </div>

            </div>
          </div>
        )}
      </div>
    );
  }
}
