import React, { Component } from 'react';

export class Success extends Component {
  render() {
    const { name, employee, department, email, date, deleted } = this.props.detail;
    const { deleteEmp } = this.props
    return (
      <div>
        <h1 className='text-white'>Employee data Created Successfully!</h1>
        <table class='table table-dark'>
          <thead>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Name</th>
              <th scope='col'>Employee ID</th>
              <th scope='col'>Department</th>
              <th scope='col'>Email</th>
              <th scope='col'>DOJ</th>
              <th scope='col'>Action</th>
            </tr>
          </thead>
          <tbody>
            {deleted ? <tr>
              <th scope='row'>1</th>
              <td>Deleted Successfully</td>
            </tr> : <tr>
              <th scope='row'>1</th>
              <td>{name}</td>
              <td>{employee}</td>
              <td>{department}</td>
              <td>{email}</td>
              <td>{date}</td>
              <td className="btn btn-outline-danger" onClick={() => deleteEmp()}>Delete</td>
            </tr>}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Success;
