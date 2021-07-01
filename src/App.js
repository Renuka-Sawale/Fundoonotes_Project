import './App.css';
import Registration from './Pages/RegistrationPage/Registration';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Login from './Pages/LoginPage/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/registration" component={Registration} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
