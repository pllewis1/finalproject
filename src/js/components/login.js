import React from 'react';
import { Link } from 'react-router';
import User from '../models/user';

class Login extends React.Component {
  constructor(props){
    super(props)
    this.handleLogin = this.handleLogin.bind(this);

    this.state = {
      email: null
    }
  }

  handleLogin(e) {
    e.preventDefault();

    let email = this.refs.email.value;
    let password = this.refs.password.value;

    User.login({username: email, password}, () => {
      this.setState({email});
      this.props.history.pushState(null, "dashboard");
    })
  }
  render() {
    return (
      <form onSubmit={this.handleLogin}>
        <input type="text" ref="email" placeholder="Millie@Snailephant.com" required/>
        <input type="password" ref="password" placeholder="password" required/>
        <input type="submit" value="login" required/>
        <Link to="register">Not a member? Sign Up</Link>
      </form>
    )
  }
}

export default Login;
