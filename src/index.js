import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Store from './pages/store/Store';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Store />, document.getElementById('root'));
serviceWorker.unregister();
