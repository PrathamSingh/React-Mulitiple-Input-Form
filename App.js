import React from 'react';
import './App.css';
import Form from './components/Form';

class App extends React.Component {
  state = {
    open: false
  };
  handleForm = () => {
    const { open } = this.state;
    this.setState({ open: true });
  };
  render() {
    const { open } = this.state;
    return (
      <div className='App'>
        <div className='container'>
          {open ? (
            <Form />
          ) : (
            <div className='text-center'>
              <button onClick={this.handleForm} className='btn btn-primary'>
                New Employee
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
