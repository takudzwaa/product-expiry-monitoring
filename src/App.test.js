import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
import { screen } from '@testing-library/react'; // Remove duplicate import statement
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import App from './App';
import Login from './Login';
import LoginPage from './LoginPage';
import Dashboard from './Dashboard';

test('renders learn react link', () => {
  render(
    <BrowserRouter>
      <Routes>
        <Route path="/" exact component={LoginPage} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/login" component={Login} />
      </Routes>
    </BrowserRouter>
  );

  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders LoginPage component', () => {
  render(
    <BrowserRouter>
      <Routes>
        <Route path="/" exact component={LoginPage} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/login" component={Login} />
      </Routes>
    </BrowserRouter>
  );

  const loginPageElement = screen.getByTestId('login-page');
  expect(loginPageElement).toBeInTheDocument();
});

test('renders Dashboard component', () => {
  render(
    <BrowserRouter>
      <Routes>
        <Route path="/" exact component={LoginPage} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/login" component={Login} />
      </Routes>
    </BrowserRouter>
  );
});

test('renders Login component', () => {
  render(
    <BrowserRouter>
      <Routes>
        <Route path="/" exact component={LoginPage} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/login" component={Login} />
      </Routes>
    </BrowserRouter>
  );

  const dashboardElement = screen.getByTestId('dashboard');
  expect(dashboardElement).toBeInTheDocument();
});