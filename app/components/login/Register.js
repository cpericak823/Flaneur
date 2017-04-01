import * as React from 'react';
import * as axios from 'axios';
import { Select, Button, notification } from 'antd';
import { Layout } from './Layout';
import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router';
import { Home } from '../home';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';

class Register extends React.Component {
  startLoading() {
    this.setState({
      loading: true
    });
  }

  endLoading() {
    this.setState({
      loading: false
    });
  }

  redirectToHome() {
    this.context.router.push('home');
  }

  sendSuccessNotification() {
    notification['success']({
      message: 'Yayyy!!',
      description: 'You are registered.',
    });
  }

  sendErrorNotification() {
    notification['error']({
      message: 'Oops',
      description: 'Please try again.',
    });
  }


  // Data Request Methods

  createUser(event) {
    event.preventDefault();
    this.startLoading();
    console.log(this.state);
    axios.post('/register', this.state)
      .then(() => {
        this.sendSuccessNotification();
        this.endLoading();
        this.redirectToHome();
      })
      .catch((error) => {
        this.sendErrorNotification();
        this.endLoading();
        console.log(error);
      });
  }


  initializeState() {
    this.setState({
      loading: false
    });
  }

  componentWillMount() {
    this.initializeState();
  }

  handleChange(e) {
    console.log('changing');
    var value = e.target.value;
    var id = e.target.id;
      
    var updatedState = {};
    updatedState[id] = value;
    this.setState(updatedState);
  }

  render(){
    return (
      <div>
        <Row className ="register-form">
      <Col xs={12} md={6}>
        <h2 className='register-header'>
          Register
        </h2>
        <form onSubmit={(event) => this.createUser(event)}>
          <div className='register-email'>
            <label htmlFor='username'>Email</label><br/>
            <input 
              value={this.state.username}
              type='text'
              id='username'
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <div className='register-email'>
              <label htmlFor='password'>Password</label><br/>
              <input 
                value={this.state.password}
                type="password"
                id='password'
                onChange={(e) => this.handleChange(e)}
              />
          </div>
          <div className='form-row'>
            <Button
              id='registerButton'  
              type='primary'
              htmlType='submit'
              loading={this.props.loading}
            >
              Register
            </Button>
          </div>
        </form>
        </Col>
        </Row>
     </div>
    )
  }
}

Register.contextTypes = {
  router: React.PropTypes.any
};
export { Register };
