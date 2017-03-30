import * as React from 'react';
import * as axios from 'axios';

class Layout extends React.Component {
    setInitialState(user){
      this.setState({

        user: false

      });
    }
    
  register(user){
    this.setState({
      user: true

    });
  }

    render(){
      return(

    <div>
      <div className='navbar.navbar-inverse.navbar-fixed-top navbar-inner'>
        <div className='container'>
          <a href="/">Flaneur</a>
          <ul></ul>
        </div>             
      </div>
      {this.props.children}
    </div>

      )
    
  }
}


export { Layout };

