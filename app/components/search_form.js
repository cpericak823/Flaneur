var React = require("react");
var Button = require('antd/lib/button');
var Select = require('antd/lib/select');
var Navbar = require("react-bootstrap/lib").Navbar;
var FormGroup = require("react-bootstrap/lib").FormGroup;
var FormControl = require("react-bootstrap/lib").FormControl;
var Button = require("react-bootstrap/lib").Button;
var Col = require("react-bootstrap/lib").Col;
var Row = require("react-bootstrap/lib").Row;
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
        <Row className="navbar">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <Col sm={3} md={3}>
              <img src="../../assets/images/walking-man-clipart-3.png" />
              </Col>
              <Col sm={3} md={3}>Flaneur </Col>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Navbar.Form>
              <Col sm={3} md={3}>
                <FormGroup onSubmit={(event) => this.handleSubmit(event)}>
                  <input
                    defaultValue={this.state.city}
                    type='text'
                    id='city'
                    onChange={(event) => this.handleUpdateTextInput(event)}
                  />
                </FormGroup>
              </Col>
              <div className="find_attractions">
                <Col sm={3} md={3}>
                  <Button type='submit'
                    htmlType='submit'
                    loading={this.props.loading}>Find Attractions</Button>
                </Col>
              </div>
            </Navbar.Form>
          </Navbar.Collapse>
        </Navbar>
        </Row>
      </div>
    )
  }
})
SearchForm.propTypes = {
  submitAction: React.PropTypes.func.isRequired,
  defaultCity: React.PropTypes.string,

};
module.exports = SearchForm;