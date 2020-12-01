import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import CreateStudent from "./components/createStudent.component";
import LoginStudent from "./components/login.component";

class App extends Component {

  state = { message: "" }
  callbackFunction = (childData) => {
        this.setState({message: "User ID - " + childData})
  }

  render() {
    return (
      <Router>
        <div>
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark main-nav">
            <div class="container justify-content-center">
                <ul class="nav navbar-nav flex-fill w-100 flex-nowrap">
                    <li class="nav-item">
                      <Link to={"/add"} className="nav-link">
                        Add a paper
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link to={"/view"} className="nav-link">
                        Search a paper
                      </Link>
                    </li>
                </ul>
                <ul class="nav navbar-nav flex-fill justify-content-center">
                    <li class="nav-item">
                      <a href="/login" className="navbar-brand">
                        The Class Archives
                      </a>
                    </li>
                </ul>
                <ul class="nav navbar-nav flex-fill w-100 justify-content-end">
                    <li class="nav-item">
                      <Link to={"/create"} className="nav-link">
                        Sign Up
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link to={"/login"} className="nav-link">
                        Login
                      </Link>
                    </li>
                </ul>
            </div>
        </nav>

          <div className="container mt-3">
            <Switch>
              {/* A JSX comment
              <Route exact path="/add" component={AddPapers} />
              <Route exact path="/view" component={ViewPapers} />
              */}
              <Route exact path="/login" component={LoginStudent} />
              <Route exact path="/create" component={CreateStudent} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
