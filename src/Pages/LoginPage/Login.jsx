import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../LoginPage/login.css';
import UserService from '../../services/userService';
const service = new UserService()

export default class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            emailError: false,
            emailErrorMessage: '',
            password: '',
            passwordError: false,
            passwordErrorMessage: ''
        }
    }

    handleInput = (e) => {
        console.log(e.target.name, e.target.value);
        this.setState({ [e.target.name]: e.target.value })
    } 

    validationCheck = () => {
        this.setState({
            emailError: false,
            emailErrorMessage: '',
            passwordError: false,
            passwordErrorMessage: ''
        })
        let valid = true;
        if(this.state.email.length == 0) {
            valid = false
            this.setState({
                emailError: true,
                emailErrorMessage: 'Choose a Gmail address'
            })
        }
        if(this.state.password.length == 0) {
            valid = false
            this.setState({
                passwordError: true,
                passwordErrorMessage: 'Enter a password'
            })
        }
        return valid;
    }

    ShowPassword = (e) => {
        this.setState({ showPassword: !this.state.showPassword });
    }

    handleClickToForgotPassword = (e) => {
        // Redirect to="/resetPassword";
        console.log("xyz");
        this.props.history.push("/forgotPassword");
    }

    handleClickToRegistration = (e) => {
        // Redirect to="/registration";
        console.log("xyz");
        this.props.history.push("/registration");
    }
    submit = () => {
        if (this.validationCheck()) {
            console.log('call api');
            let data = {
                "email": this.state.email,
                "service": "advance",
                "password": this.state.password
            }
            service.login(data).then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.log("error: ", error);
            });
           
        } else {
            console.log('validation failed')
        }
    }

    render() {
        return (
            <div className="content">
                <form className="top-content">
                    <div className="second-row">
                        <div className="top">
                            <div className="fundooo">
                                <h1 style={{color : '#34a853'}}>F</h1>
                                <h1 style={{color : '#4285f4'}}>u</h1>
                                <h1 style={{color : '#fbbc05'}}>n</h1>
                                <h1 style={{color : '#4285f4'}}>d</h1>
                                <h1 style={{color : '#ea4335'}}>o</h1>
                                <h1 style={{color : '#fbbc05'}}>o</h1>
                            </div> 
                            <h1 className="content-text">Sigin</h1>
                            <h1 className="content-text1">Use Your Google Account</h1>
                        </div>

                        <div className="content2">
                            <TextField id="outlined-basic" name="email" label="Email" error={this.state.emailError} helperText={this.state.emailErrorMessage} fullWidth variant="outlined" onChange={this.handleInput} />
                            <TextField className="password-text" error={this.state.passwordError} name="password" type={this.state.showPassword ? "text": "password"} id="outlined-basic" label="Password" helperText={this.state.passwordErrorMessage} fullWidth variant="outlined" onChange={this.handleInput} />

                            <p className="email-text" onClick={this.handleClickToForgotPassword}>Forgot Password?</p>
                            <p className="email-notification">Not your computer? Use Guest mode to sign in privately.</p>
                        </div>

                        <div class="Bottom-Button">
                            <div class="Bottom-text">
                                <p onClick={this.handleClickToRegistration}>Create account</p> 
                            </div>
                            <div className="button">
                                <Button variant="contained" color="primary" onClick={this.submit}>Next</Button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}


