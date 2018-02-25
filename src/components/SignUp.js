import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { auth } from '../firebase';
import { Grid, Row, Col, FormControl, FormGroup, Button } from 'react-bootstrap';

import * as routes from '../constants/routes';


const SignUpPage = ({ history}) =>
  <div>
    <Grid>
      <Row className="show-grid">
        <Col xs={3} xsOffset={9}>
          <h1>Sign up Page</h1>
          <SignUpForm history={history} />
        </Col>
      </Row>
    </Grid>
  </div>

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
}

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});


class SignUpForm extends Component {
  constructor(props) {
    super(props);
    
    this.state = { ...INITIAL_STATE }
  }

  onSubmit =(event) =>  {
    const {
      email,
      passwordOne,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
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
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';

    return ( 
      <form onSubmit={this.onSubmit}>
        <FormGroup>
          <FormControl
            value={username}
            onChange={event => this.setState(byPropKey('username', event.target.value))}
            type="text"
            placeholder="Full Name"
          />
        </FormGroup>
        <FormGroup>
          <FormControl
          value={email}
          onChange={event => this.setState(byPropKey('email', event.target.value))}
          type="text"
          placeholder="Email Address"
          />
        </FormGroup>
        <FormGroup>
          <FormControl
            value={passwordOne}
            onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
            type="password"
            placeholder="Password"
          />
        </FormGroup>
        <FormGroup>
          <FormControl
            value={passwordTwo}
            onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
            type="password"
            placeholder="Confirm Password"
          />
          </FormGroup>
          <Button 
            disabled={isInvalid} 
            type="submit"
            bsStyle="primary">
              Sign Up
          </Button>
          { error && <p>{error.message}</p> }
      </form>
     )
  }
}

const SignUpLink = () =>
  <p>
    Don't have an account ?
    {' '}
    <Link to={routes.SIGN_UP} className="link">Sign Up</Link>
  </p>  
 

export default withRouter(SignUpPage);

export {
  SignUpForm,
  SignUpLink
};