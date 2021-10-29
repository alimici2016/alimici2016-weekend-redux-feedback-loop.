import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';



// const storeInstance = createStore(
//     combineReducers({
//       ,
//     }),
//     applyMiddleware(logger)

ReactDOM.render(
    <Provider >
      <App />
    </Provider>,
    document.getElementById("root")
  );
  
registerServiceWorker();
