var React = require("react");
var SearchForm = require("./search_form.js");
var GenerateMap = require("./map.js");
var axios = require("axios");

var Home = React.createClass({
    startLoading() {
        this.setState({
            loading: true
        });
    },

    endLoading() {
        this.setState({
            loading: false
        });
    },
    searchCity(location) {

        this.startLoading();
        axios.post("/search", location)
            .then(function (res) {
                this.setState({
                    attractions: res.data.attractions
                })
            }.bind(this))
            .catch(function (err) {
                this.endLoading();
                console.error(err);
            }.bind(this));
    },

    // Setting Initial State

    initializeState() {
        this.setState({
            loading: false,
            attractions: []
        });
    },

    // Lifecycle Methods

    componentWillMount() {
        this.initializeState();
    },

    render: function () {
        return (
            <div>
                <div className="main-content">
                    <SearchForm
                        loading={this.state.loading}
                        submitAction={(location) => this.searchCity(location)}
                        defaultCity={'Chicago'}
                    />
                    <GenerateMap
                        attractions={this.state.attractions}
                    />
                </div>
            </div>
        )
    }

});

module.exports = Home;