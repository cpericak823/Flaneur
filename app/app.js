// Include the Main React Dependencies

var React = require("react");
var ReactDOM = require("react-dom");
 
// Grabs the Routes
import { router } from "./router";
console.log(router);
// Renders the contents according to the route page.
ReactDOM.render(router, document.getElementById("app"));
