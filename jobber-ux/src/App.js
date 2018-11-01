import React, { Component } from 'react';
// import logo from './favicon.ico';
import './App.css';
// import './public/stylesheets/style.css';
// import banner from '/images/banner2.jpg'
import Joblist from './components/joblist/joblist';
import Landing from './components/landingImg/landingImg';
import LandingSection from './components/landingsection/landingsection';
import PublishJob from './components/publishjob/publishjob';
import Navbar from './components/navbar/navbar';
import SearchForm from './components/searchform/searchform';
import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt } from 'react-router-dom';
import Route from 'react-router-dom/Route';

class App extends Component {
  // componentDidMount() {
  //   document.title = "Jobber";
  // }

  render() {
    return (
      <div>
        <Navbar />
        <Router>
          <Route path="/" exact strict render={() => {
            return (<Landing />);
          }
          } />
        </Router>

        {/* <Router>
          <Route path="/" exact strict render={() => {
            return (<LandingSection />);
          }
          } />
        </Router> */}

        <Router>
          <Route path="/jobs" exact strict render={() => {
            return (<Joblist />);
          }
          } />
        </Router>

        <Router>
          <Route path="/publishJob" exact strict render={() => {
            return (<PublishJob />);
          }
          } />
        </Router>


        <div className="footer">
          {/* <div className="banner-footer" /> */}
          <a href="#"> Team | </a>
          <a href="#">  Privacy </a>
          <p> &copy; 2018 JOBBERLINE </p>
        </div>

      </div >

    );
  }
}

export default App;
