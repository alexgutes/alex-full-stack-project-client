import React, { Component } from 'react';
import LoginForm from './LoginForm';

export default class LoginPage extends Component {
  render() {
    return (
      <div className="login-container">
        <LoginForm />
      </div>
    );
  }
}
