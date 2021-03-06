import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';

import '../ResetPasswordPage/resetPassword.css';

import UserService from '../../services/userService';
const service = new UserService()

export default class ResetPassword extends Component {

    constructor(props) {
        super(props)
        this.state = {
            password: '',
            passwordError: false,
            passwordErrorMessage: '',
            confirmPassword: '',
            confirmPasswordError: false,
            confirmPasswordErrorMessage: ''
        }
    }

    handleInput = (e) => {
        console.log(e.target.name, e.target.value);
        this.setState({ [e.target.name]: e.target.value })
    } 

    ShowPassword = (e) => {
        this.setState({ showPassword: !this.state.showPassword });
    }

    handleClickToShowPassword = (e) => {
        this.setState({ showPassword: !this.state.showPassword });
    };

    handleClickToLogin = (e) => {
        // Redirect to="/login";
        this.props.history.push("/login");
    };

    validationCheck = () => {
        this.setState({
            passwordError: false,
            passwordErrorMessage: '',
            confirmPasswordError: false,
            confirmPasswordErrorMessage: ''
        })
        let valid = true;
        if(this.state.password.length == 0) {
            valid = false;
            this.setState({
                passwordError: true,
                passwordErrorMessage: 'Enter a password'
            })
        }
        if(this.state.confirmPassword.length == 0) {
            valid = false
            this.setState({
                confirmPasswordError: true,
                confirmPasswordErrorMessage: 'confirm password'
            })
        }
        return valid;
    }

    submit = () => {
        if (this.validationCheck()) {
            console.log('call api');
            let data = {
                "newPassword": this.state.password
            };
            let token = this.props.match.params.token;
            service.resetPassword(data, token).then((data, token) => {
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
                <form className="reset-top-content">
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
                            <h1 className="content-text">Account recovery</h1>
                        </div>

                        <div className="reset-content2">
                            <TextField id="outlined-basic" name="password" type={this.state.showPassword ? "text": "password"} label="Enter the New password" error={this.state.passwordError} helperText={this.state.passwordErrorMessage} fullWidth variant="outlined" onChange={this.handleInput} />
                        </div>

                        <div className="reset-content2">
                            <TextField id="outlined-basic" name="confirmPassword" type={this.state.showPassword ? "text": "password"} label="Confirm password" error={this.state.confirmPasswordError} helperText={this.state.confirmPasswordErrorMessage} fullWidth variant="outlined" onChange={this.handleInput} />
                        </div>

                        <div class= "checkbox">
                            <Checkbox onClick={this.handleClickToShowPassword} color="primary" inputProps={{ 'aria-label': 'secondary checkbox' }}  />
                            <p>Show Password</p>
                        </div>

                        <div class="Bottom-Buttonr">
                            <div className="button">
                                <Button className="reset-bottonbtn" variant="contained" color="primary" onClick={this.submit}>Next</Button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}


