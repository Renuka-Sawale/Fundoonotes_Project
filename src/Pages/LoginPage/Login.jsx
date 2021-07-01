import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../LoginPage/login.css';

class LoginPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            emailError: false,
            emailErrorMessage: '',
           // password: '',
           // passwordError: false,
           //passwordErrorMessage: ''
        }
    }

    handleInput = (e) => {
        console.log(e.target.name, e.target.value);
        this.setState({ [e.target.name]: e.target.value })
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
                            <TextField id="outlined-basic" label="Email or phone" fullWidth variant="outlined" />
                            <p className="email-text">Forgot Email?</p>
                            <p className="email-notification">Not your computer? Use Guest mode to sign in privately.</p>

                        </div>

                        <div class="Bottom-Button">
                            <div class="Bottom-text">
                                <p>Sign in instead</p> 
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

export default LoginPage

