import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/home.component";
import LoginStudent from "./components/login.component";
import CreateStudent from "./components/createStudent.component";
import AddPapers from "./components/addPapers.component";

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
                <ul class="nav navbar-nav flex-fill justify-content-center">
                    <li class="nav-item">
                      <a href="/" className="navbar-brand">
                        The Class Archives
                      </a>
                    </li>
                </ul>
            </div>
        </nav>

          <div className="container mt-3">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={LoginStudent} />
              <Route exact path="/create" component={CreateStudent} />
              <Route exact path="/add" component={AddPapers} />
              {/* A JSX comment
              <Route exact path="/view" component={ViewPapers} />
              */}
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
