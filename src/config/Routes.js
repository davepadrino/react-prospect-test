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
        <Route path="/doctors" component={Doctors} />
        <Route path="/services" component={Services} />
        <Route path="/packages" component={Packages} />
      </NavBar>
    </Switch>
  </Router>
);

export default Routes;
