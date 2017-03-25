var React = require("react");
var SearchForm = require("./search_form.js");
// var GenerateMap = require("./map.js");
// var AttractionsList = require("./attractions_list.js");
var axios = require("axios");

var Main = React.createClass({
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
        axios.post("/search",location) 
                .then(function() {
                })
                .catch(function (err) {
                    this.endLoading();
                    console.error(err); 
                });
        // })
    },

    // Setting Initial State

    initializeState() {
        this.setState({
            loading: false
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
                    <h2>Search for a City</h2>
                    <SearchForm
                        loading={this.state.loading}
                        submitAction={(location) => this.searchCity(location)}
                        defaultCity={'Chicago'}
                    />
                    {/*<AttractionsList />*/}
                    {/*{this.props.children}*/}
                </div>
            </div>
        )
    }
    
});

module.exports = Main;