var React = require("react");

var GenerateMap = React.createClass({
    // componentDidMount (){
    //     initMap();
    // },
    //on this.props.attractions, call map to create children
    render: function () {
        console.log(this.props.attractions);
        // return this.props.attractions.map(function (attractions, index) {
            return (
                <div>
                    <div id="map"></div>
                    <div id="right-panel">
                        <div>
                            <b>Start:</b>
                            <select id="start">
                                {this.props.attractions.map(function(attractions, index){
                                    return <option key={index} value={attractions.name}>{attractions.name}</option>;
                                })}
                               
                            </select>
                            <br />
                            <b>Waypoints:</b> <br />
                            <i>(Ctrl+Click or Cmd+Click for multiple selection)</i> <br />
                            <select multiple id="waypoints">
                                {this.props.attractions.map(function(attractions, index){
                                    return <option key={index} value={attractions.name}>{attractions.name}</option>;
                                })}
                            </select>
                            <br />
                            <b>End:</b>
                            <select id="end">
                                 {this.props.attractions.map(function(attractions, index){
                                    return <option key={index} value={attractions.name}>{attractions.name}</option>;
                                })}
                            </select>
                            <br />
                            <input type="submit" id="submit" />
                        </div>
                        <div id="directions-panel"></div>
                    </div>

                </div>
            )
        // }.bind(this));
    }
});
module.exports = GenerateMap;