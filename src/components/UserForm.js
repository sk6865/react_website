import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';

export class UserForm extends Component {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    date: '',
    time: '',
    recipe: ''
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const recipe = this.props.location.state.recipe.fields.title;

    const { step } = this.state;
    const { firstName, lastName, email, date, time } = this.state;
    const values = { firstName, lastName, email, date, time, recipe };

    switch (step) {
      case 1:
        return (
          <div>
          <h1 style={{textAlign: "center", marginTop: '50px'}}>Step 2: Enter your personal information</h1>
          <FormUserDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
          </div>
        );
      case 2:
        return (
          <div>
          <h1 style={{textAlign: "center", marginTop: '50px'}}>Step 3: Select a date and time</h1>
          <FormPersonalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
          </div>
        );
      case 3:
        return (
          <div>
          <h1 style={{textAlign: "center", marginTop: '50px'}}>Step 4: Confirm your information</h1>
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
          </div>
        );
      case 4:
        return <Success values={values}/>;
      default:
        console.log("Default")
    }
  }
}

export default UserForm;
