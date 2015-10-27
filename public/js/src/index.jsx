import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import App from './containers/App';

let appElement =  document.getElementById('app')

ReactDOM.render(<App />, appElement);
