// Include the Main React Dependencies

var React = require("react");
var ReactDOM = require("react-dom");
var router = require("./router");
var Main = require("./components/main.js")
var routes = require("./config/frontend_routes.js");
var where = document.getElementById("app");

ReactDOM.render(router, routes, where);

