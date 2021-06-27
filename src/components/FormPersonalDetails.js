import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip'

export class FormPersonalDetails extends Component {
  constructor(props){
    super(props);
    this.state = {data: ""} ;
}

  continue = e => {
    if (this.props.values.date === '' || this.props.values.time === '') {
      this.setState({data: 'Please fill in all required fields.'})
      return;
    }

    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };


  render() {
    const { values, handleChange } = this.props;
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    
    if(dd<10) dd='0'+dd;
    if(mm<10) mm='0'+mm;

    var date = yyyy+'-'+mm+'-'+dd
    values.date = date;
    values.time = '8:00'
    
    return (
      <div className="registerForm">

      <MuiThemeProvider>
        <>
            <AppBar title="Enter Personal Details" />         
            <Tooltip title="You must go back to the Register page to select a different cooking class." aria-label="class">
            <TextField
              label="Class"
              onChange={handleChange('time')}
              defaultValue={values.recipe}
              margin="normal"
              disabled
              fullWidth
            />
            </Tooltip>
            <TextField
              placeholder="Select a date"
              label="Date"
              type="date"
              onChange={handleChange('date')}
              margin="normal"
              defaultValue={date}
              required
              fullWidth
            />
            <br />
            <TextField
              placeholder="Select a time"
              label="Time"
              type="time"
              onChange={handleChange('time')}
              defaultValue='08:00'
              margin="normal"
              required
              inputProps={{
                step: 300, // 5 min
                }}

              fullWidth
            />
            <p style={{color: "red"}}>{this.state.data}</p>
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
            >Continue</Button>
        </>
      </MuiThemeProvider>
      </div>
    );
  }
}

export default FormPersonalDetails;
