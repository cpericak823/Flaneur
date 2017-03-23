var React = require("react");
// var SearchForm = require("./search_form.js");
// var GenerateMap = require("./map.js");

/*module.exports = (
var SearchForm = React.createClass({
    render: function(){
    return(
        
        <div>
            <SearchForm />
            <div className="main-content">
                {this.props.children}
            </div>
        </div>
    )}
});*/

var Main = React.createClass({
    render: function(){
    return(
        <div>
           
            <div className="main-content">
                Hello, world
                {this.props.children}
            </div>
        </div>
    )}
});
module.exports = Main;