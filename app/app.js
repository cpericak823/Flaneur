// Include the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");
var Main = require("./components/main.js")
// require("./styles/dragula_style.css");


var routes = require("./config/frontend_routes.js");
var where = document.getElementById("app");

ReactDOM.render(routes, where);
