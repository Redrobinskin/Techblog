import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/App.css';
import Blog from './components/Blog';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Blog} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;