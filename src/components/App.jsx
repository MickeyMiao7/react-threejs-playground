import React, { Component } from 'react';
import './App.css';
import vertexShader from './vertexShader.glsl';
import { Route, Switch } from 'react-router';
import { HashRouter } from 'react-router-dom';
import Introduction from './Introduction';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div id="three-playground">
          <aside>
            <ul>
              <li>Basic 1</li>
              <li> 2</li>
              <li>3 </li>
            </ul>
          </aside>
          <main>
            <Switch>
              <Route path='/index' component={Introduction} />
              <Route exact path='/' component={Introduction} />
            </Switch>
          </main>
        </div>
      </HashRouter>
   );
  }
}

export default App;
