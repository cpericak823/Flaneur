import * as React from 'react';
import * as axios from 'axios';
import { Select, Button, notification } from 'antd';
import { Layout } from './Layout';
import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router';
import { Home } from '../home';
import { Register } from './Register';
import cookie from 'react-cookie';

class Login extends React.Component{
  setUserCookie(user) {
    cookie.save('userId', user.id, { path: '/' });
  }

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

  redirectToRegister() {
    this.context.router.push('register');
  }
  sendSuccessNotification() {
    notification['success']({
      message: 'Great!',
      description: 'You are logged in.',
    });
  }

  sendErrorNotification() {
    notification['error']({
      message: 'Uh-Oh',
      description: 'Account not found. Please register.',
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state)   
    axios.post('/login', this.state)
        .then((user) => {
        this.sendSuccessNotification();
        this.endLoading();
        this.setUserCookie(user);
        this.redirectToHome();
        console.log(event);
      })
      .catch((error) => {
        this.sendErrorNotification();
        this.redirectToRegister();
        this.endLoading();
        console.log(error);
      }) 
 
  }  

  handleUpdateTextInput(event) {
    const newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  }

  initializeState() {
      this.setState({
      username:  '',
      password:  ''
    });
  }

  componentWillMount() {
    this.initializeState();
  }

  render(){
    return(
      <div>
        <h2>
          Log In
        </h2>
        <form onSubmit= {(event) => this.handleSubmit(event)}>
          <div className='form-row'>
            <label htmlFor='Username'>Username</label><br/>
            <input 
              defaultValue={this.state.username}
              type='text'
              id='username'
              onChange={(event) => this.handleUpdateTextInput(event)}
            />
          </div>
          <div className='form-row'>
              <label htmlFor='password'>Password</label><br/>
              <input 
                defaultValue={this.state.password}
                type="text"
                id='password'
                onChange={(event) => this.handleUpdateTextInput(event)}
              />
          </div>
          <div className='form-row'>
            <Button  
              type='primary'
              htmlType='submit'
              loading={this.props.loading}
            >
              Log In
            </Button>
          </div>
        </form>
      </div>
    )
    
  }
  
}
Login.contextTypes = {
  router: React.PropTypes.any
}


export { Login };