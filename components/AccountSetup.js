import React, { Component } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export class AccountSetup extends Component {
  state = {
    date: new Date(),
    open: false
  };

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  onChange = date => this.setState({ date, open: false });
  showCalender = () => this.setState({ open: true })
  render() {
    const { values, inputChange } = this.props;

    return (
      <div className='form-container'>
        <h1 className='mb-5'>Employee Form</h1>
        <div className='form-group'>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            className='form-control'
            name='name'
            onChange={inputChange('name')}
            value={values.name}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='employee'>Employee ID</label>
          <input
            type='text'
            className='form-control'
            name='employee'
            onChange={inputChange('employee')}
            value={values.employee}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='department'>Department</label>
          <select
            id='dropdown'
            className='form-control'
            onChange={inputChange('department')}
            value={values.department}
          >
            <option value='N/A'>Select a Department</option>
            <option>Engineering Department</option>
            <option>IT Department</option>
            <option>Civil Department</option>
            <option>Electronics Department</option>
          </select>
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            className='form-control'
            name='email'
            onChange={inputChange('email')}
            value={values.email}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='date'>Date of Joining</label>
          <input
            type='text'
            className='form-control'
            name='date'
            value={this.state.date}
            onClick={this.showCalender}
          />
          
            {this.state.open ? <Calendar onChange={this.onChange} value={this.state.date} /> : null}
        </div>

        <br />

        <div className='text-right'>
          <button className='btn btn-primary' onClick={this.continue}>
            Continue
          </button>
        </div>
      </div>
    );
  }
}

export default AccountSetup;
