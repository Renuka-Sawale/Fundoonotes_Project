import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../ForgotPasswordPage/forgotPassword.css';

import UserService from '../../services/userService';
const service = new UserService()

export default class ForgotPasswordPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            emailError: false,
            emailErrorMessage: ''
        }
    }

    handleInput = (e) => {
        console.log(e.target.name, e.target.value);
        this.setState({ [e.target.name]: e.target.value })
    } 

    validationCheck = () => {
        this.setState({
            emailError: false,
            emailErrorMessage: ''
        })
        let valid = true;
        if(this.state.email.length == 0) {
            valid = false
            this.setState({
                emailError: true,
                emailErrorMessage: 'Choose a Gmail address'
            })
        }
        return valid;
    }

    submit = () => {
        if (this.validationCheck()) {
            console.log('call api');
            let data = {
                "email": this.state.email,
                "service": "advance"
            }
            service.forgetPassword(data).then((data) => {
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
                <form className="top-content1">
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
                            <h1 className="content-text">Find your Email</h1>
                            <h1 className="content-phntxt">Enter your phone number or recovery email</h1>
                        </div>

                        <div className="email-content">
                            <TextField id="outlined-basic" name="email" label="Phone Number or Email" error={this.state.emailError} helperText={this.state.emailErrorMessage} fullWidth variant="outlined" onChange={this.handleInput} />
                        </div>

                        <div class="Bottom-Button1">
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


