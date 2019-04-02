import React, { Component } from 'react'
import {BrowserRouter } from 'react-router-dom';
import routerConfig from '../router/router.config.js'
import RouterView from '../router/RouterView'
import { Provider } from 'react-redux'
import Stort from '../store'
class App extends Component {
  render() {
    return (
      <div id="App">
        <Provider store={Stort} >
          <BrowserRouter>
            <RouterView routes={routerConfig} />
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;