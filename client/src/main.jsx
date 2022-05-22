import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {Provider} from 'react-redux';
import {applyMiddleware,createStore,composeStore} from 'redux';

import thunk from 'redux-thunk';
import reducers from './reducers';

// const store = createStore(reducers,compose(applyMiddleware(thunk)));

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
    
//   </React.StrictMode>
// )

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

