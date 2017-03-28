// Include the React library
var React = require("react");

// Include the react-router module
var router = require("react-router");

// Include the Route component for displaying individual routes
var Route = router.Route;

// Include the Router component to contain all our Routes
var Router = router.Router;

<<<<<<< HEAD
=======
// Include the hashHistory prop to handle routing client side without a server
>>>>>>> master
var hashHistory = router.hashHistory;

// Include the IndexRoute (catch-all route)
var IndexRoute = router.IndexRoute;

// Reference the high-level components
var SearchForm = require("../components/search_form.js");
var GenerateMap = require("../components/map.js");
var Login = require ("../components/login/Login.js");
var Main = require("../components/main.js");
var Home = require("../components/home.js");

// Export the Routes
module.exports = (

  // The high level component is the Router component

  <Router history={hashHistory}>    
    <Route path="/" component={Main} >      
	  <Route path="login" component={Login.Login} />
	  <Route path="home" component={Home} />
    </Route>         
  </Router>

);
