import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from "redux";
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
};//should set this object "feedbackReducer to my inputs"


// const feedbackReducer = (state = feedbackObject, action) => {
//     if (action.type === "ANSWER_ONE") {
//         return { ...state, feeling: action.payload }
//     } else if (action.type === "ANSWER_TWO") {
//         return { ...state, understanding: action.payload }
//     } else if (action.type === "ANSWER_THREE") {
//         return { ...state, support: action.payload }
//     } else if (action.type === "ANSWER_FOUR") {
//         return { ...state, comments: action.payload }
//     }

//     return state;
// };

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


ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
