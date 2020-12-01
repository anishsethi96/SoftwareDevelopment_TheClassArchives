import React, { Component } from "react";
import LoginDataService from "../services/login.service";
import { BrowserRouter as Link } from "react-router-dom";

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
        <div>
        <h2> Please select Application Type </h2>
        <br/>
        <button className="btn btn-success" >
        <Link to = {"/add"} params={{ testvalue: "hello" }} style={{ textDecoration: 'none', color: "white"}}>
          Add Paper
        </Link>
        </button>
        <button className="btn btn-success" >
        <Link to = {"/view"} style={{ textDecoration: 'none', color: "white"}}>
          Find Paper
        </Link>
        </button>
        </div>
      ) : (
        <div className="submit-form">
          <h3> Login to existing account, or click on Sign Up to establish a new free account </h3>
          <div>
            <div className="form-group">
              <label htmlFor="title">Username</label>
              <input type="text" className="form-control" maxLength="7" placeholder="Enter Username" value={searchUser} onChange={this.onChangesearchUser}/>
            </div>
            <div className="form-group">
              <label htmlFor="description">Password</label>
              <input type="password" className="form-control" id="password" maxLength="127" required value={this.state.password} onChange={this.onChangePassword} name="password" />
            </div>
            <button onClick={this.searchUser} className="btn btn-success">
              Login
            </button>

            <button className="btn btn-success button">
            <Link to = {"/create"} style={{ textDecoration: 'none', color: "white"}}>
              Sign Up
            </Link>
            </button>
            </div>
            </div>
          )}
        </div>
      );
    }
  }
