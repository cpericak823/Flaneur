var React = require("react");
var Navbar = require("react-bootstrap/lib").Navbar;
var NavItem = require("react-bootstrap/lib").NavItem;
var MenuItem = require("react-bootstrap/lib").MenuItem;
var NavDropdown = require("react-bootstrap/lib").NavDropdown;
var Nav = require("react-bootstrap/lib").Nav;
var FormGroup = require("react-bootstrap/lib").FormGroup;
var Form = require("react-bootstrap/lib").Form;
var FormControl = require("react-bootstrap/lib").FormControl;
var Button = require("react-bootstrap/lib").Button;
var Col = require("react-bootstrap/lib").Col;
var Row = require("react-bootstrap/lib").Row;

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
          <Navbar collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <img src="../../assets/images/walking-man-clipart-3.png" responsive />
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1}>Flaneur</NavItem>
      </Nav>
      <Nav pullRight>
          <Form inline onSubmit={(event) => this.handleSubmit(event)}>
            <FormGroup >
              {' '}
                <FormControl      defaultValue={this.state.city}
                    type='text'
                    id='city'
                    onChange={(event) => this.handleUpdateTextInput(event)}/>
            </FormGroup>
             {' '}
                <Button type='submit'
                    htmlType='submit'
                    loading={this.props.loading}>Find Attractions
                </Button>
          </Form>
          <Button onClick={this.props.logout}>Log Out</Button>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  </div>
        
    )
  }
})
SearchForm.propTypes = {
  submitAction: React.PropTypes.func.isRequired,
  defaultCity: React.PropTypes.string,

};
module.exports = SearchForm;