import './App.css';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import Registration from './Pages/RegistrationPage/Registration';
import Login from './Pages/LoginPage/Login';
import ForgotPassword from './Pages/ForgotPasswordPage/ForgotPassword';
import ResetPassword from './Pages/ResetPasswordPage/ResetPassword';


function App() {
  return (
    <div className="App">
      {/* <header className="App-component"> */}
      <BrowserRouter>
        {/* <Redirect from="/" to="/login" /> */}
        <Switch>
          <Route exact path="/registration" component={Registration} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/forgotPassword" component={ForgotPassword} />
          <Route exact path="/resetPassword" component={ResetPassword} />
        </Switch>
      </BrowserRouter>
      {/* </header> */}
    </div>
  );
}

export default App;
