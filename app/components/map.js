var React = require("react");
var mapHelper = require('../../public/map_helper');

var GenerateMap = React.createClass({
    componentDidMount (){
        window.initMap = mapHelper.initMap(this);
        loadJS('https://maps.googleapis.com/maps/api/js?key=AIzaSyDxABenYv94mikJFrSwiVV1cbB-lPRfH5I&callback=initMap')
    }, 
    //on this.props.attractions, call map to create children
    render: function () {
        console.log(this.props.attractions);
       
            return (
                <div>
                    <div id="map" ref="map"></div>
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
        
    }
}); 

function loadJS(src) {
    var ref = window.document.getElementsByTagName("script")[0];
    var script = window.document.createElement("script");
    script.src = src;
    script.async = true;
    ref.parentNode.insertBefore(script, ref);
}

module.exports = GenerateMap;