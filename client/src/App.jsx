import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Navbar from './components/Navbar.jsx';

import LoginPage from './pages/LoginPage.jsx';
import SignupPage from './pages/SignupPage.jsx';

function App() {
  console.log('App');
  return (
    <div className='container'>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/login/login' component={LoginPage} />
          <Route path='/login' component={LoginPage} />
          <Route path='/signup' component={SignupPage} />
          <Redirect to='/' />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
