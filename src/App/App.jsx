import './App.css';
import React from 'react';
import MainPage from '../MainPage/MainPage';
import PhonebookNav from '../components/PhonebookNav/PhonebookNav.jsx';
import { Container, Jumbotron } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Container>
        <Jumbotron>
          <h1>Phonebook App</h1>
        </Jumbotron>
        <PhonebookNav />
        <MainPage />
      </Container>
    </div>
  );
}

export default App;