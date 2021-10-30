import React from 'react';
import './App.css';
import FeedbackForm from '../FeedbackForm/FeedbackForm';
import FeedbackFormTwo from '../FeedbackFormTwo/FeedbackFormTwo';
import Header from '../Header/Header';
import { Route, HashRouter as Router, Link} from 'react-router-dom';
import FeedbackFormThree from '../FeedbackFormThree/FeedbackFormThree';
import FeedbackFormFour from '../FeedbackFormFour/FeedbackFormFour';
import SubmitPage from '../SubmitPage/SubmitPage';


function App() {

  return (
    <div className='App'>

      <Router>
        <Header />

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
        
      </Router>
      

    </div>
  );
}

export default App;
