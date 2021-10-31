import React from 'react';
import './App.css';
import FeedbackForm from '../FeedbackForm/FeedbackForm';
import FeedbackFormTwo from '../FeedbackFormTwo/FeedbackFormTwo';
import Header from '../Header/Header';
import { Route, HashRouter as Router } from 'react-router-dom';
import FeedbackFormThree from '../FeedbackFormThree/FeedbackFormThree';
import FeedbackFormFour from '../FeedbackFormFour/FeedbackFormFour';
import SubmitPage from '../SubmitPage/SubmitPage';
import ThankYouPage from '../ThankYou/ThankYouPage';
import Admin from '../Admin/Admin'

function App() {
 
  return (
    <div className='App'>

      <Router>
        <Header />

        <Route path="/admin">
          <Admin />
        </Route>

        <Route path='/' exact>
          <FeedbackForm />

        </Route>

        <Route path='/two'>
          <FeedbackFormTwo />
        </Route>

        <Route path='/three'>
          <FeedbackFormThree />

        </Route>

        <Route path='/four'>
          <FeedbackFormFour />

        </Route>
        <Route path='/submit'>
          <SubmitPage />
        </Route>

        <Route path='/thank'>
          <ThankYouPage />
        </Route>

      </Router>


    </div>
  );
}

export default App;
