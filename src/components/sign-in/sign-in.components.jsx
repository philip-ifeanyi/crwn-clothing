import React, { Component } from "react";
import CustomButton, {BUTTON_TYPE_CLASSES} from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import './sign-in.styles.scss';

class Signin extends Component {
  state = {
    email: '',
    password: ''
  }

  handleSubmit = e => {
    e.preventDefault();

    this.setState({
      email: '',
      password: ''
    })
  }

  handleChange = e => {
    const {value, name} = e.target;

    this.setState({
      [name]: value
    })
  }


  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type='email'
            label='Email'
            value={this.state.email} 
            handleChange={this.handleChange}
            required 
          />
          <FormInput
            name="password" 
            type='password'
            label='Password'
            value={this.state.password} 
            handleChange={this.handleChange} 
            required 
          />
          <div className="buttons">
            <CustomButton type="submit"> Sign In</CustomButton>
            <CustomButton
              onClick={signInWithGoogle}
              buttonType={BUTTON_TYPE_CLASSES.google}
              type='button'>
              Sign In With Google
            </CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default Signin;