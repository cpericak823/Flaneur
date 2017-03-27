var React = require("react");
var Button = require('antd/lib/button');
var Select = require('antd/lib/select');
var Option = Select.Option;


var SearchForm = React.createClass({
     // Form Event Handlers

  handleSubmit(event) {
    event.preventDefault();
    this.props.submitAction(this.state);
  },

  handleUpdateTextInput(event) {
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  },
  // Setting Initial State
  initializeState() {
    this.setState({
      city: this.props.defaultCity || '',
    });
  },

  // Lifecycle Methods
  componentWillMount() {
    this.initializeState();
  },
    render: function () {
        return (
           <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <div className='form-row'>
            <label htmlFor='Where do you want to go?'>City</label><br/>
            <input
              defaultValue={this.state.city}
              type='text'
              id='city'
              onChange={(event) => this.handleUpdateTextInput(event)}
            />
          </div>
          <div className='form-row'>
            <Button
              type='primary'
              htmlType='submit'
              loading={this.props.loading}
            >
              Find Attractions
            </Button>
          </div>
        </form>
      </div>
    )
  }
})

// Props for PostForm component
// Requires a "submitAction" function
// Optional "defaultTitle" string value
SearchForm.propTypes = {
  submitAction: React.PropTypes.func.isRequired,
  defaultCity: React.PropTypes.string,
 
};
    module.exports = SearchForm;