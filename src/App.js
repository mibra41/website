import PageWrapper from './components/PageWrapper';
import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

// Pages
import Home from './components/pages/Home';
import Resources from './components/pages/Resources';
import Blog from './components/pages/Blog';
import Memories from './components/pages/Memories';
import Resume from './components/pages/Resume';
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
          
          <Route 
            exact="true"
            path="/resources"
            component={Resources}
          /> 
          
          <Route 
            exact="true"
            path="/blog"
            component={Blog}
          />
          
          <Route 
            exact="true"
            path="/memories"
            component={Memories}
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
