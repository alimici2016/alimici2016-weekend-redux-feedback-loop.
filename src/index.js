import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "react-logger";


const answerReducer = (state = [], action) => {
    if (action.type === "ADD_ANSWER"){
        return [...state, action.payload]
    }
    return state;
};

const answerTwoReducer = (state = [], action) => {
    if (action.type === "ADD_ANSWER_TWO"){
        return [...state, action.payload]
    }
    return state;
};

const answerThreeReducer = (state = [], action) => {
    if (action.type === "ADD_ANSWER_THREE"){
        return [...state, action.payload]
    }
    return state;
};


const answerFourReducer = (state = [], action) => {
    if (action.type === "ADD_ANSWER_FOUR"){
        return [...state, action.payload]
    }
    return state;
};

const storeInstance = createStore(
    combineReducers({
        answerReducer,
        answerTwoReducer,
        answerThreeReducer,
        answerFourReducer
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
