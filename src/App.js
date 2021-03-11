import PageWrapper from './components/PageWrapper';
import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

// Pages
import Home from './components/pages/Home';
import Resume from './components/pages/Resume';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
class App extends Component {
  render() {
    return (
      <Router>
        <PageWrapper>
          <Route 
            exact="true"
            path="/"
            component={Home} 
          />

          <Route 
            exact="true"
            path="/about"
            component={About}
          />

          <Route 
            exact="true"
            path="/contact"
            component={Contact}
          />

          <Route 
            exact="true"
            path="/resume"
            component={Resume}
          />
        </PageWrapper>
      </Router>
    );
  }
}


export default App;
