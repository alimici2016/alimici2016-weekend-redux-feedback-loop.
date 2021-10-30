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
          <nav>
            <button>
              <Link to="/two">NEXT</Link>
            </button>
          </nav>

        </Route>

        <Route path='/two'>
          <FeedbackFormTwo />
          <nav>
            <button>
              <Link to="/three">NEXT</Link>
            </button>
          </nav>
        </Route>

        <Route path='/three'>
          <FeedbackFormThree />
          <nav>
            <button>
              <Link to="/four">NEXT</Link>
            </button>
          </nav>

        </Route>

        <Route path='/four'>
          <FeedbackFormFour />
          <nav>
            <button>
              <Link to="/submit">NEXT</Link>
            </button>
          </nav>

         </Route>
        <Route path='/submit'>
        <SubmitPage />
        </Route> 

      </Router>
    </div>
  );
}

export default App;
