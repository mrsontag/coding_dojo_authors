import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import Form from './components/form';
import List from "./components/list";

function App() {
  return (
    <div className="App">
      <h1>Favorite Authors:</h1>
      <Router>
        <List path="/" />
        <Form path="/new" />
        <Form path="/edit/:id" />
      </Router>
    </div>
  );
}

export default App;
