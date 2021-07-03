import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
// import Snackbar from "@material-ui/core/Snackbar";
// import IconButton from "@material-ui/core/IconButton";
// import CloseIcon from "@material-ui/icons/Close";
import Button from '@material-ui/core/Button';
import '../RegistrationPage/registration.css';
import UserService from '../../services/userService';

const service = new UserService()

export default class Registration extends Component {

    constructor(props) {
        super(props)
        this.state = {
            // open: false,
            // SnackbarMsg: "",
            // SnackbarStyle: "",
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

    validationCheck = () => {
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
            valid = false;
            this.setState({
                firstNameError: true,
                firstNameErrorMessage: 'Enter First name'
            })
        }
        if(this.state.lastName.length == 0) {
            valid = false
            this.setState({
                lastNameError: true,
                lastNameErrorMessage: 'Enter Last name'
            })
        }
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
        if(this.state.confirmPassword.length == 0) {
            valid = false
            this.setState({
                confirmPasswordError: true,
                confirmPasswordErrorMessage: 'confirm password'
            })
        }
        return valid;
    }

    ShowPassword = (e) => {
        this.setState({ showPassword: !this.state.showPassword });
    }

    handleClickToLogin = (e) => {
        // Redirect to="/login";
        console.log("xyz");
        this.props.history.push("/login");
    };

    handleClickToShowPassword = (e) => {
        this.setState({ showPassword: !this.state.showPassword });
    };

    submit = () => {
        if (this.validationCheck()) {
            console.log('call api');
            let data = {
                "firstName": this.state.firstName,
                "lastName": this.state.lastName,
                "email": this.state.email,
                "service": "advance",
                "password": this.state.password
            }
            service.registration(data).then((data) => {
                console.log(data);
                // this.setState({
                //     open: true,
                //     SnackbarMsg: "successfully signup",
                //     SnackbarStyle: "snackbar-success",
                // });
            })
            .catch((error) => {
                console.log("error: ", error);
                // this.setState({
                //     open: true,
                //     SnackbarMsg: "oops something went wrong",
                //     SnackbarStyle: "snackbar-error",
                // });
            });
           
        } else {
            console.log('validation failed')
        }
    }

    handleClose = () => {
        this.setState({
          open: false,
          SnackbarMsg: "",
          SnackbarStyle: "error",
        });
    };

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
                            <TextField className="field-mr" error={this.state.firstNameError} name="firstName" id="outlined-basic" label="First name" helperText={this.state.firstNameErrorMessage} variant="outlined" onChange={this.handleInput}/>
                            <TextField error={this.state.lastNameError} id="outlined-basic" name="lastName" label="Last name"  helperText={this.state.lastNameErrorMessage} variant="outlined" onChange={this.handleInput} />
                        </div>

                        <div className="content2">
                            <TextField error={this.state.emailError} id="outlined-basic" name="email" label="Your email address" helperText={this.state.emailErrorMessage} fullWidth variant="outlined" onChange={this.handleInput} />
                        </div>

                        <div class="content3">
                            <TextField className="field-mr" error={this.state.passwordError} name="password" type={this.state.showPassword ? "text": "password"} id="outlined-basic" label="Password" helperText={this.state.passwordErrorMessage} variant="outlined" onChange={this.handleInput} />
                            <TextField name="confirmPassword" type={this.state.showPassword ? "text": "password"} error={this.state.passwordError} id="outlined-basic" label="Confirm Password" helperText={this.state.confirmPasswordErrorMessage} variant="outlined" onChange={this.handleInput} />
                        </div>
                    
                        <div class= "checkbox">
                            <Checkbox onClick={this.handleClickToShowPassword} color="primary" inputProps={{ 'aria-label': 'secondary checkbox' }}  />
                            <p>Show Password</p>
                        </div>

                        <div class="Bottom-Button">
                            <div class="Bottom-text">
                                <p onClick={this.handleClickToLogin}>Sign in instead</p> 
                            </div>
                            <div className="button">
                                <Button variant="contained" color="primary" onClick={this.submit}>Submit</Button>
                            </div>
                        </div>
                    </div>
                  
                    <div className="sigin-img">
                        <div className="sigin-img">
                            <img src="https://ssl.gstatic.com/accounts/signup/glif/account.svg" alt="" width="220" height="200" class="j9NuTc TrZEUc"/> 
                        </div>  
                        <div className= "img-text">
                            <p>One account. All of Google working for you. </p>
                        </div>
                    </div>
                </form>
                {/* <Snackbar
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "center",
                    }}
                    open={this.state.open}
                    autoHideDuration={2000}
                    onClose={this.handleClose}
                    message={this.state.SnackbarMessage}
                    className={this.state.SnackbarStyle}
                    action={
                        <React.Fragment>
                        <IconButton
                            size="small"
                            aria-label="close"
                            color="inherit"
                            onClick={this.handleClose}
                        >
                            <CloseIcon fontSize="small" />
                        </IconButton>
                        </React.Fragment>
                    }
                /> */}
            </div>
        )
    }
}


