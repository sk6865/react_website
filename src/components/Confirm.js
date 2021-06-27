import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';

export class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { firstName, lastName, email, date, time, recipe }
    } = this.props;
    return (
      <div className="registerForm">

      <MuiThemeProvider>
        <>
            <AppBar title="Confirm User Data" />
            <List>
              <ListItem>
                <ListItemText primary="First Name" secondary={firstName}/>
              </ListItem>
              <ListItem>
                <ListItemText primary="Last Name" secondary={lastName}/>
              </ListItem>
              <ListItem>
                <ListItemText primary="Email" secondary={email} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Class" secondary={recipe} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Date" secondary={date} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Time" secondary={time} />
              </ListItem>
            </List>
            <br />

            <Button
              color="secondary"
              variant="contained"
              onClick={this.back}
              className="registerBtn"
            >Back</Button>

            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
              className="registerBtn"
            >Confirm & Continue</Button>
        </>
      </MuiThemeProvider>
      </div>
    );
  }
}

export default Confirm;
