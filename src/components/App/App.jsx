import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import './App.css';

function App() {

  // const fetchInput = () => {
  //   axios.get({
  //     method: 'GET',
  //     url: '/'
  //   }).then((response) => {
  //     console.log(response)
  //     // setInput(response.data)
  //   }).catch((err) => {
  //     alert(err)
  //   })
  // }

  // useEffect(() => {
  //   fetchInput();
  // }, [])

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
    </div>
  );
}

export default App;
