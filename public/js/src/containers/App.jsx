import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import { Router, Route, Link } from 'react-router';
import { reduxReactRouter,
         routerStateReducer,
         ReduxRouter
       } from 'redux-router';
import { Provider } from 'react-redux';
import { compose, createStore, applyMiddleware } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import { devTools, persistState } from 'redux-devtools';
import contactsApp from '../reducers';
import createHistory from 'history/lib/createHashHistory';

import Layout from './app/Layout';
import Dash from '../components/staticViews/Dashboard';
import ContactsList from '../components/contacts/ContactsList';


const store = compose(
  applyMiddleware(apiMiddleware),
  reduxReactRouter({
    createHistory
  }),
  devTools()
  // persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
)(createStore)(contactsApp);

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <ReduxRouter>
            <Route path="/" component={Layout}>
              <Route path="contacts" component={ContactsList} />
              <Route path="dashboard" component={Dash} />
            </Route>
          </ReduxRouter>
        </Provider>
        {/*
        <DebugPanel top bottom bottom>
          <DevTools store={store} monitor={LogMonitor} />
        </DebugPanel> */}
      </div>
    )
  }
}

export default App;
