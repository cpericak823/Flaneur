var React = require("react");
var SearchForm = require("./search_form.js");
var GenerateMap = require("./map.js");
var axios = require("axios");
var cookie = require('react-cookie');

var Home = React.createClass({
    isLoggedIn() {                
        var validCookie = cookie.load('userId');
        if (!validCookie) {
          this.context.router.push('/');
        }
    },
    logOut(){
        axios.post('/logout').then(()=>{
            console.log(this.context);
            cookie.remove('userId');
            this.context.router.push('/');
        }).catch((error)=>{
            console.log(error);
        });
    },
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
        this.isLoggedIn();    
        return (
            <div>
                <div className="main-content">
                    <SearchForm
                        logout={this.logOut}
                        loading={this.state.loading}
                        submitAction={(location) => this.searchCity(location)}
                        defaultCity={''}
                    />
                    <GenerateMap
                        attractions={this.state.attractions}
                    />
                </div>
            </div>
        )
    }

});

Home.contextTypes = {
    router: React.PropTypes.any,
};

module.exports = Home;