var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var AddProperty = React.createClass({

  getInitialState: function () {
  return {
     selectedOption: 'lease'
  };
  },
  handleOptionChange: function (e) {
    this.setState({
      selectedOption: e.target.value
    });
  },
  handleSubmit: function (e) {
    e.preventDefault();
    var {dispatch} = this.props;
//    var todoText = this.refs.todoText.value;
    var name = this.refs.name.value;
    var want = this.state.selectedOption;
    var location = this.refs.location.value;
    var price = this.refs.price.value;
    var isAgent = this.refs.isAgent.value;

    console.log( want );

    if (name.length > 0) {
      this.refs.name.value = '';
      this.refs.location.value = '';
      this.refs.price.value = '';
      this.refs.isAgent.value = '';
      dispatch(actions.addTodo('gordon', name, location, want, price, isAgent));
    } else {
      this.refs.name.focus();
    }
   },
    render  : function () {
      var state = this.state;
       return (
         <div className="container">
            <h3>Property Form</h3>
            <form onSubmit={this.handleSubmit}>
              <input type="text"  name="name"     ref="name"     placeholder="Property Name"></input>
              <input type="text"  name="location" ref="location" placeholder="location"></input>
              <input type="radio" value="lease" checked={state.selectedOption === 'lease'} onChange={this.handleOptionChange}
/>lease
              <input type="radio" value="rent" checked={state.selectedOption === 'rent'} onChange={this.handleOptionChange}
/>rent
              <input type="radio" value="sale" checked={state.selectedOption === 'sale'} onChange={this.handleOptionChange}
/>Sale
              <input type="radio" value="buy" checked={state.selectedOption === 'buy'} onChange={this.handleOptionChange}
/>buy
              <input type="text"  name="price"    ref="price"    placeholder="asking price"></input>
              <input type="checkbox" name="isAgent" ref="isAgent" value="true">is an agent</input>
              <button className="button expanded">Post Now!</button>
            </form>
         </div>
       )
    }
});

export default connect()(AddProperty);
