import './App.css';
import LoginForm from './LoginForm';
import Dashboard from './Dashboard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <Router>
      <React.Fragment>
        <main>
          <Routes>
            <Route path='/' element={<LoginForm />} />
            <Route path='/dashboard' element={<Dashboard />} />
          </Routes>
        </main>
      </React.Fragment>
    </Router>
  );
}

export default App;
