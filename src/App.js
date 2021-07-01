import './App.css';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import Registration from './Pages/RegistrationPage/Registration';
import Login from './Pages/LoginPage/Login';
import ForgotEmail from './Pages/ForgotEmailPage/ForgotEmail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/registration" component={Registration} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/forgotEmail" component={ForgotEmail} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
