import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import '../RegistrationPage/registration.css'

class RegistrationPage extends Component {
    render() {
        return (
            <div class="content">
                <form class="top-content">
                    {/* <div>
                        <img src="https://ssl.gstatic.com/accounts/signup/glif/account.svg" alt="" width="24" height="24" class="j9NuTc TrZEUc"/> 

                    </div> */}
                   <div className="fundooo">
                        <h1 style={{color : '#34a853'}}>F</h1>
                        <h1 style={{color : '#4285f4'}}>u</h1>
                        <h1 style={{color : '#fbbc05'}}>n</h1>
                        <h1 style={{color : '#4285f4'}}>d</h1>
                        <h1 style={{color : '#ea4335'}}>o</h1>
                        <h1 style={{color : '#fbbc05'}}>o</h1>
                    </div>

                    <h1 class="content-text">Create your Google Account</h1>
                    <div class="content1">
                        <TextField id="outlined-basic" label="First name" variant="outlined" />
                        <TextField id="outlined-basic" label="Last name" variant="outlined" />
                    </div>

                    <div class="content2">
                        <TextField id="outlined-basic" label="Username" fullWidth variant="outlined" />
                    </div>
                    
                    <div class="content3">
                        <TextField id="outlined-basic" label="Password" variant="outlined" />
                        <TextField id="outlined-basic" label="ConfirmPassword" variant="outlined" />
                    </div>
                </form>
            </div>
        )
    }
}

export default RegistrationPage

