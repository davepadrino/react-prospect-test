import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Doctors from "../components/Doctors";
import Services from "../components/Services";
import Packages from "../components/Packages";
import NavBar from '../components/NavBar';

const Routes = props => (
  <Router {...props}>
    <Switch>
      <NavBar>
        <Route exact path="/" component={Home} />
        <Route exact path="/doctors" component={Doctors} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/packages" component={Packages} />
      </NavBar>
    </Switch>
  </Router>
);

export default Routes;
