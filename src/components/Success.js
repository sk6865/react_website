import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link'
import success from '../img/success.jpg'

export class Success extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
      <div className="registerForm">

      <MuiThemeProvider>
        <>
            <AppBar title="Success" />
            <h1>Thank you for your submission!</h1>
            <p>You have successfully registered for {this.props.values.recipe} at {this.props.values.time} on {this.props.values.date}.</p>
            <p>We look forward to seeing you soon!</p>
            <br/>
            <Link href="/register">Click here to register for more classes.</Link>
            <img src={success} alt="Success" className="success"/>
        </>
      </MuiThemeProvider>
      </div>
    );
  }
}

export default Success;
