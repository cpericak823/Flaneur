var React = require("react");
var SearchForm = require("./search_form.js");
// var GenerateMap = require("./map.js");
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
    searchCity(searchObj) {
        // this.startLoading();
        axios.get("/search",searchObj) 
            // yelp.search({ term: 'attractions', location: "chicago" })
                .then(function() {
                    //return all the data (will need to adjust to display id, location)
                    // res.json(data.businesses);
                })
                .catch(function (err) {
                    // this.endLoading();
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
                        submitAction={(searchObj) => this.searchCity(searchObj)}
                        defaultCity={'Chicago'}
                    />
                    {/*{this.props.children}*/}
                </div>
            </div>
        )
    }
});
module.exports = Main;