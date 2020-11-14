import './App.css';
import React, { Component } from 'react';
import FormName from './formName';
import FormAddress from './formAddress';
import FormPhoneNumber from './formPhoneNumber';
import ButtonSubmit from './buttonSubmit';

class App extends Component {
  state = {
    firstName: '', lastName: '', address: '', phoneNumber: ''
  }

  changeFirstNameHandler = (event) => {
    const alphabetValidation = /^[A-Za-z]+$/;
    if (event.target.value.match(alphabetValidation)) {
      this.setState({
        firstName: event.target.value
      })
    }
  }

  changeLastNameHandler = (event) => {
    const alphabetValidation = /^[A-Za-z]+$/;
    if (event.target.value.match(alphabetValidation)) {
      this.setState({
        lastName: event.target.value
      })
    }
  }

  changeAddressHandler = (event) => {
    const alphabetValidation = /^[A-Za-z]+$/;
    if (event.target.value.match(alphabetValidation)) {
      this.setState({
        address: event.target.value
      })
    }
  }

  changePhoneNumberHandler = (event) => {
    const numericValidation = /^[0-9\b]+$/;
    if (event.target.value.match(numericValidation)) {
      this.setState({
        phoneNumber: event.target.value
      })
    }
  }

  checkSubmit = (event) => {
    console.log();
    if (this.state.firstName === '' || this.state.LastName === '' || this.state.address === '' || this.state.phoneNumber === '') {
      alert('All Section is required, cannot be empty!')
    } else {
      if (this.state.firstName.length < 5 || this.state.lastName.length < 5 || this.state.address.length < 5) {
        alert('Please type more than 5 words!')
      }
      else if (this.state.phoneNumber.length < 8 || this.state.phoneNumber.length > 12) {
        alert('Number characters must be between 8-12!')
      }
      else {
        alert(`Welcome, ${this.state.firstName} ${this.state.lastName} you are already registered!`)
      }
    }
  }

  render() {
    const disable = this.state.firstName.length < 5 || this.state.lastName.length < 5 || this.state.address.length < 5 || this.state.phoneNumber.length < 8 || this.state.phoneNumber.length > 12 ? true : false
    return (
      <div className="App" >
        <h1>registration form</h1>
        <div className="Form-Item">
          <FormName firstName={this.state.firstName} changeFirstName={this.changeFirstNameHandler} lastName={this.state.lastName} changeLastName={this.changeLastNameHandler} />
          <FormAddress address={this.state.address} changeAddress={this.changeAddressHandler} />
          <FormPhoneNumber phoneNumber={this.state.phoneNumber} changePhoneNumber={this.changePhoneNumberHandler} /><br />
          <ButtonSubmit /*firstName={this.state.firstName.length} lastName={this.state.lastName.length} address={this.state.address.length} phoneNumber={this.state.phoneNumber.length}*/ clickButton={this.checkSubmit} disabledButton={disable} />
        </div>
      </div>
    );
  }
}

export default App;
