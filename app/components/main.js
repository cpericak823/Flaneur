var React = require("react");
var SearchForm = require("./search_form.js");
// var GenerateMap = require("./map.js");
var axios = require("axios");
var Yelp = require('yelp');
var yelp = new Yelp({
  consumer_key: '8diW2VQILthhblqdNkbxDA',
  consumer_secret: 'O5Mo5MOmO-3Uv1XdrmjCtOjisrY',
  token: 'gfAGusgz1nnOIXYd65steP1ZpL5Hsnm4',
  token_secret: 'p4TCKLJeeoGBo4cej7M_iw4l2CU',
});

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
        this.startLoading();
        axios.get("/search", searchObj, function (req, res) {
            yelp.search({ term: 'attractions', location: "chicago" })
                .then(function (data) {
                    //return all the data (will need to adjust to display id, location)
                    res.json(data.businesses);
                })
                .catch(function (err) {
                    this.endLoading();
                    console.error(err); 
                });
        })
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