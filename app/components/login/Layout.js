import * as React from 'react';
import * as axios from 'axios';

class Layout extends React.Component {
    setInitialState(user){
      this.setState({
        // set inital state to undefined
        // list register and Login
        // else list logout
        user: false
        // render(
        //   <div>
        //     <li>
        //       <a href="/register">Register</a>
        //     </li>
        //     <li>
        //       <a href="login">Login</a>
        //     </li>
        //   </div>
          
        //   )
      });
    }
    //function to change the state to 
  register(user){
    this.setState({
      user: true
      // render(
      //     <div>
      //       <li>
      //         <a href="/logout">Log Out</a>
      //       </li>
      //     </div>
      //   )
    });
  }

    render(){
      return(
  //   doctype html
  // html
  //   head
  //     title Passport Local Mongoose Login Example
  //     link(rel='stylesheet', href='/css/bootstrap.css')
  //     link(rel='stylesheet', href='/css/custom.css')
  //     block scripts
  //       script(src='/js/jquery.min.js')
  //       script(src='/js/bootstrap.min.js')

  //   body
  //     .navbar.navbar-inverse.navbar-fixed-top
  //       .navbar-inner
  //         .container
  //           a.brand(href="/") Example
  //           ul.nav
  //             if (typeof(user) == 'undefined')
  //               li
  //                 a(href="/register") Register
  //               li
  //                 a(href="/login") Log In
  //             else
  //               li
  //                 a(href="/logout") Log Out

  //     .container
  //       block content
    // <div>
    // //   <!DOCTYPE html>
    // //   <html lang="en">         
    // //       <head>
    // //         <meta charset="UTF-8"/>
    // //         <title>Flaneur</title>
    // //             <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
    // //             <link rel="stylesheet" href="./assets/css/style.css"> 
    // //       </head>
    // //       <body>
    //             <div className='navbar.navbar-inverse.navbar-fixed-top navbar-inner'>
    //               <div className='container'>
    //                 <a href="/">Flaneur</a>
    //                 <ul></ul>
    //               </div>             
    //             </div>
    //             {this.props.children}
    // //       </body>
    // //   </html>
    // </div>
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

