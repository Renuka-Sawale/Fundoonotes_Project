import './App.css';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import Registration from './Pages/RegistrationPage/Registration';
import Login from './Pages/LoginPage/Login';
import ForgotPassword from './Pages/ForgotPasswordPage/ForgotPassword';
import ResetPassword from './Pages/ResetPasswordPage/ResetPassword';
import Dashboard from './Pages/Dashboard/Dashboard';
import CreateNote from './Components/CreateNote/CreateNote';
//import Images from 'Pages/Images';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        {/* <Redirect from="/" to="/login" /> */}
        <Switch>
          <Route exact path="/registration" component={Registration} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/forgotPassword" component={ForgotPassword} />
          <Route exact path="/resetpassword/:token" component={ResetPassword}/>
          <Route exact path="/dashboard" component={Dashboard}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
