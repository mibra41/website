import PageWrapper from './components/PageWrapper';
import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

// Pages
import Home from './components/pages/Home';
import About from './components/pages/About';
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
        </PageWrapper>
      </Router>
    );
  }
}


export default App;
