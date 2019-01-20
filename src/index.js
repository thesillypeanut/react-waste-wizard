import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './react-components/app'
import * as serviceWorker from './serviceWorker';
import { startLogging } from 'statezero';

startLogging();

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();