import React from 'react';
import '../style.scss';
import {
  BrowserRouter as Router, Route, NavLink, Switch,
} from 'react-router-dom';
import YouTube from './youtube';

const About = () => <div> All there is to know about me </div>;
const Welcome = () => <div>Welcome</div>;
const Test = (props) => <div> ID: {props.match.params.id} </div>;
const FallBack = () => <div>URL Not Found</div>;

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route path="/about" component={About} />
        <Route exact path="/test/:id" component={Test} />
        <Route exact path="/youtube" component={YouTube} />
        <Route component={FallBack} />
      </Switch>
    </div>
  </Router>
);

const Nav = () => (
  <nav>
    <ul>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/test/id1">test id1</NavLink></li>
      <li><NavLink to="/test/id2">test id2</NavLink></li>
      <li><NavLink to="/youtube" exact>YouTube</NavLink></li>
    </ul>
  </nav>
);

export default App;
