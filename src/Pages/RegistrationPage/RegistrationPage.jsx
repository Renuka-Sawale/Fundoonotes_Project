import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import '../RegistrationPage/registration.css'

class RegistrationPage extends Component {

    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         firstName: '',
    //         firstNameError: false,
    //         firstNameErrorMessage: ''
    //     }
    // }

    // handleInput = (e) => {
    //     console.log(e.target.name, e.target.value);
    //     this.setState({ [e.target.name]: e.target.value })
    // } 

    // validation = () => {
    //     this.setState({
    //         firstNameError: false,
    //         firstNameErrorMessage: '',
    //     })
    //     let valid = true;
    //     if(this.state.firstName.length == 0) {
    //         valid = false,
    //         this.setState({
    //             firstNameError: true,
    //             firstNameErrorMessage: 'First name is required!'
    //         })
    //     }
    //     return valid;
    // }

    // submit = () => {
    //     console.log(this.validation());
    //     if(this.value()) {
    //         console.log('api calling')
    //     }
    // }

    render() {
        return (
            <div className="content">
                <form className="top-content">
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
                        <TextField className="field-mr" error id="outlined-basic" label="First name" variant="outlined" onChange={this.handleInput}/>
                        <TextField error id="outlined-basic" label="Last name"  variant="outlined" />
                    </div>

                    <div className="content2">
                        <TextField id="outlined-basic" label="Your email address" fullWidth variant="outlined" />
                    </div>

                   <div class="content3">
                        <TextField className="field-mr" id="outlined-basic" label="Password" variant="outlined" />
                        <TextField id="outlined-basic" label="Confirm" variant="outlined" />
                    </div>
                   
                    <div class= "checkbox">
                        <Checkbox defaultChecked color="primary" inputProps={{ 'aria-label': 'secondary checkbox' }} />
                        {/* <p>Show Password</p> */}
                        
                    </div>
                    <div class="Bottom-Button">
                        <Button variant="contained" color="primary" href="#contained-buttons">
                            Submit
                        </Button>
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

