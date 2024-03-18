// App.js

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LoginPage} />
        <Route path="/dashboard" component={Dashboard} />

      </Switch>
    </BrowserRouter>
  );
}

export default App;
