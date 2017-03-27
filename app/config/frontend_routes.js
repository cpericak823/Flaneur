//use react_router
// Include the React library
var React = require("react");

// Include the react-router module
var router = require("react-router");

// Include the Route component for displaying individual routes
var Route = router.Route;

// Include the Router component to contain all our Routes
// Here where we can pass in some configuration as props
var Router = router.Router;

// Include the hashHistory prop to handle routing client side without a server
// https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#hashhistory
var hashHistory = router.hashHistory;

// Include the IndexRoute (catch-all route)
var IndexRoute = router.IndexRoute;

// Reference the high-level components
var SearchForm = require("../components/search_form.js");
var AttractionsList = require("../components/attractions_list.js");
var SelectedAttractions = require("../components/selected_attractions.js");
var GenerateMap = require("../components/map.js");
var Login = require("../components/login.js");
var Main = require("../components/main.js");


// Export the Routes
module.exports = (

  // The high level component is the Router component
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="map" component={GenerateMap} />
      <Route path="search" component={SearchForm} />
      {/*<Route path="attractions" component={AttractionsList} />*/}
      {/* list the path to show the appropriate component */}
      {/*<Route path="attractions" component={AttractionsList} />
      <Route path="myattractions" component={SelectedAttractions} />
      

      {/* If user selects any other path... we get the Info Route */}
      <IndexRoute component={Main} />

    </Route>
  </Router>

);
