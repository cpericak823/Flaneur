import * as React from 'react';
import * as axios from 'axios';
import { Select, Button, notification } from 'antd';
import { Layout } from './Layout';
import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router';
import { Home } from '../home';
import { Register } from './Register';


class Login extends React.Component{
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
<<<<<<< HEAD
    event.preventDefault();
    console.log(this.state)
    // if (/*check is user is already in db*/){    
=======
    event.preventDefault(); 
    console.log(this.state)    
>>>>>>> fca97299ae643744400c50284ae0796179ef6aa2
    axios.post('/login', this.state)
        .then(() => {
        this.sendSuccessNotification();
        this.endLoading();
        this.redirectToHome();
        console.log(event);
      })
      .catch((error) => {
        this.sendErrorNotification();
        this.redirectToRegister();
        this.endLoading();
<<<<<<< HEAD
        console.log(error);
      }) 
    // }  else{
    //   this.redirectToRegister();
    // }
=======
        // console.log(error);
      });   
>>>>>>> fca97299ae643744400c50284ae0796179ef6aa2
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
<<<<<<< HEAD
=======

Login.contextTypes = {
  router: React.PropTypes.any
};
>>>>>>> fca97299ae643744400c50284ae0796179ef6aa2

export { Login };