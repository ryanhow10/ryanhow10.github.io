import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import 'tachyons';
import './App.css';

function App() {
  return (
    <div className="ma5">
      <Navigation></Navigation>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
        <Switch>
          <Route path="/about">
            <About></About>
          </Route>
        </Switch>
        <Switch>
          <Route path="/experience">
            <Experience></Experience>
          </Route>
        </Switch>
        <Switch>
          <Route path="/projects">
            <Projects></Projects>
          </Route>
        </Switch>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
