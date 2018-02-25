import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { PasswordForgetLink } from './PasswordForget';
import { SignUpLink } from './SignUp';
import { auth } from '../firebase';
import * as routes from '../constants/routes';
import { FormControl, FormGroup, Button, Grid, Row, Col } from 'react-bootstrap';


const SignInPage = ({ history }) =>
  <div>
    <Grid>
      <Row className="show-grid">
        <Col xs={3} xsOffset={9}>
          <h1>Sign In</h1>
          <SignInForm history={history} />
          <br />
          <PasswordForgetLink />
          <br />
          <SignUpLink />
        </Col>
      </Row>
    </Grid>
  </div>

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      email,
      password,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
        history.push(routes.HOME);
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      email,
      password,
      error,
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '';

    return (
      
      <form onSubmit={this.onSubmit}>
        <FormGroup>
          <FormControl
            type="text"
            label="Email Address"
            placeholder="Email Address"
            value={email}
            onChange={event => this.setState(byPropKey('email', event.target.value))}
          />
        </FormGroup>
        <FormGroup>
          <FormControl
            label="Password"
            value={password}
            onChange={event => this.setState(byPropKey('password', event.target.value))}
            type="password"
            placeholder="Password"
          />
        </FormGroup>
        <Button 
          disabled={isInvalid} 
          type="submit"
          bsStyle="primary">
            Sign In
        </Button>
        { error && <p>{error.message}</p> }
      </form>
    );
  }
}

export default withRouter(SignInPage);

export {
  SignInForm,
};