import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from "redux";
import registerServiceWorker from './registerServiceWorker';
import logger from 'redux-logger';

let feedbackObject = {
    feeling: '',
    understanding: '',
    support: '',
    comments: ''
}

const feedbackReducer = (state = feedbackObject, action) => {
    switch (action.type) {
        case "ANSWER_ONE":
            return { ...state, feeling: action.payload }
        case "ANSWER_TWO":
            return { ...state, understanding: action.payload }
        case "ANSWER_THREE":
            return { ...state, support: action.payload }
        case "ANSWER_FOUR":
            return { ...state, comments: action.payload }
        default:
            return state
    }
};
//should set this object "feedbackReducer to my inputs"

const storeInstance = createStore(
    combineReducers({
        feedbackReducer
        // answerReducer,
        // answerTwoReducer,
        // answerThreeReducer,
        // answerFourReducer
    }),
    applyMiddleware(logger)
);
//combines the reducer into one store

ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
