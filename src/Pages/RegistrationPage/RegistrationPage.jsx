import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import '../RegistrationPage/registration.css'

class RegistrationPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            firstNameError: false,
            firstNameErrorMessage: '',
            lastName: '',
            lastNameError: false,
            lastNameErrorMessage: '',
            email: '',
            emailError: false,
            emailErrorMessage: '',
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

    validation = () => {
        this.setState({
            firstNameError: false,
            firstNameErrorMessage: '',
            lastNameError: false,
            lastNameErrorMessage: '',
            emailError: false,
            emailErrorMessage: '',
            passwordError: false,
            passwordErrorMessage: '',
            confirmPasswordError: false,
            confirmPasswordErrorMessage: ''
        })
        let valid = true;
        if(this.state.firstName.length == 0) {
            valid = false
            this.setState({
                firstNameError: true,
                firstNameErrorMessage: 'First name is required!'
            })
        }
        if(this.state.lastName.length == 0) {
            valid = false
            this.setState({
                lastNameError: true,
                lastNameErrorMessage: 'Last name is required!'
            })
        }
        if(this.state.email.length == 0) {
            valid = false
            this.setState({
                emailError: true,
                emailErrorMessage: 'Email is required!'
            })
        }
        if(this.state.password.length == 0) {
            valid = false
            this.setState({
                passwordError: true,
                passwordErrorMessage: 'Password is required!'
            })
        }
        if(this.state.confirmPassword.length == 0) {
            valid = false
            this.setState({
                confirmPasswordError: true,
                confirmPasswordErrorMessage: 'Confirm Password is required!'
            })
        }
        return valid;
    }

    submit = () => {
        console.log();
        this.validation()
    }

    render() {
        return (
            <div className="content">
                <form className="top-content">
                    <div>
                    <div className="fundooo">
                        <h1 style={{color : '#34a853'}}>F</h1>
                        <h1 style={{color : '#4285f4'}}>u</h1>
                        <h1 style={{color : '#fbbc05'}}>n</h1>
                        <h1 style={{color : '#4285f4'}}>d</h1>
                        <h1 style={{color : '#ea4335'}}>o</h1>
                        <h1 style={{color : '#fbbc05'}}>o</h1>
                    </div>
                    <h1 className="content-text">Create your Google Account</h1>
                    <div className="content1">
                        <TextField className="field-mr" error={this.state.firstNameError} id="outlined-basic" label="First name" helperText={this.state.firstNameErrorMessage} variant="outlined" onChange={this.handleInput}/>
                        <TextField error={this.state.lastNameError} id="outlined-basic" label="Last name"  helperText={this.state.lastNameErrorMessage} variant="outlined" />
                    </div>

                    <div className="content2">
                        <TextField error={this.state.emailError} id="outlined-basic" label="Your email address" helperText={this.state.emailErrorMessage} fullWidth variant="outlined" />
                    </div>

                   <div class="content3">
                        <TextField className="field-mr" error={this.state.passwordError} id="outlined-basic" label="Password" helperText={this.state.passwordErrorMessage}variant="outlined" />
                        <TextField error={this.state.confirmPasswordError} id="outlined-basic" label="Confirm" helperText={this.state.confirmPasswordErrorMessage} variant="outlined" />
                    </div>
                   
                    <div class= "checkbox">
                        <Checkbox defaultChecked color="primary" inputProps={{ 'aria-label': 'secondary checkbox' }} />
                        {/* <p>Show Password</p> */}
                        
                    </div>
                    <div class="Bottom-Button">
                        <Button variant="contained" color="primary" href="#contained-buttons" onClick={this.submit}>Submit</Button>
                    </div>
                    </div>
                    <div className="sigin-img">
                        <img src="https://ssl.gstatic.com/accounts/signup/glif/account.svg" alt="" width="220" height="300" class="j9NuTc TrZEUc"/> 
                    </div>  
                </form>
            </div>
        )
    }
}

export default RegistrationPage

