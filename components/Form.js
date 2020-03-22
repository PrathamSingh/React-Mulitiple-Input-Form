import React, { Component } from 'react';
import AccountSetup from './AccountSetup';
import Confirm from './Confirm';
import Success from './Success';

export class Form extends Component {
  state = {
    step: 1,
    name: '',
    employee: '',
    department: '',
    email: '',
    date: '',
    deleted: false
  };
  deleteEmp = () => {
    this.setState({ deleted: true })
  }

  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  inputChange = input => e => {
    this.setState({
      [input]: e.target.value
    });
  };

  render() {
    const { step } = this.state;
    const { name, employee, department, email, date } = this.state;
    const values = { name, employee, department, email, date};

    switch (step) {
      case 1:
        return (
          <AccountSetup
            nextStep={this.nextStep}
            inputChange={this.inputChange}
            values={values}
          />
        );
      case 2:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            inputChange={this.inputChange}
            values={values}
          />
        );
      case 3:
        return <Success detail={this.state}  deleteEmp={this.deleteEmp}/>;
    }
  }
}

export default Form;
