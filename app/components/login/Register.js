import * as React from 'react';
import * as axios from 'axios';
import { Select, Button, notification } from 'antd';
import { Layout } from './Layout';
import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router';
import { Home } from '../home';

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

  createUser() {
    this.startLoading();
    console.log(this.state);
    axios.post('/register', this.state)
      .then(() => {
        this.sendSuccessNotification();
        this.endLoading();
        this.redirectToHome();
        console.log(registerObj);
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
        <h2>
          Register
        </h2>
        <form onSubmit={(registerObj) => this.createUser()}>
          <div className='form-row'>
            <label htmlFor='username'>Username</label><br/>
            <input 
              value={this.state.username}
              type='text'
              id='username'
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <div className='form-row'>
              <label htmlFor='password'>Password</label><br/>
              <input 
                value={this.state.password}
                type="text"
                id='password'
                onChange={(e) => this.handleChange(e)}
              />
          </div>
          <div className='form-row'>
            <Button  
              type='primary'
              htmlType='submit'
              loading={this.props.loading}
            >
              Register
            </Button>
          </div>
        </form>
     </div>
    )
  }
}

Register.contextTypes = {
  router: React.PropTypes.any
};
export { Register };
