import './App.css';
import React from 'react';
import MainPage from '../MainPage/MainPage';
import PhonebookNav from '../components/PhonebookNav';

function App() {
  return (
    <div className="App">
      <PhonebookNav />
      <MainPage />
    </div>

  );
}

export default App;