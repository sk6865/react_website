import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip'

export class FormUserDetails extends Component {
  constructor(props){
    super(props);
    this.state = {data: ""} ;
}

  continue = e => {
    if (this.props.values.firstName === '' || this.props.values.lastName === '' || this.props.values.email === '') {
      this.setState({data: 'Please fill in all required fields.'})
      return;
    }

    e.preventDefault();
    this.props.nextStep();
  };  

  render() {
    const { values, handleChange } = this.props;
    return (
      <div className="registerForm">
      <MuiThemeProvider>
        <>
            <AppBar title="Enter User Details" />
            <TextField
              placeholder="Enter your first name"
              label="First Name"
              onChange={handleChange('firstName')}
              defaultValue={values.firstName}
              margin="normal"
              required
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter your last name"
              label="Last Name"
              onChange={handleChange('lastName')}
              defaultValue={values.lastName}
              margin="normal"
              required
              fullWidth
            />
            <br />
            <Tooltip title="Valid format: name@example.com" aria-label="add">
              <TextField
                placeholder="Enter your email"
                label="Email"
                onChange={handleChange('email')}
                defaultValue={values.email}
                margin="normal"
                required
                fullWidth
              />
            </Tooltip>
            <br />
            <p style={{color: "red"}}>{this.state.data}</p>
            <br />
            <Button
              color="secondary"
              variant="contained"
              href="/register"
              className="registerBtn"
            >Back</Button>

            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Continue</Button>
        </>
      </MuiThemeProvider>
      </div>
    );
  }
}

export default FormUserDetails;
