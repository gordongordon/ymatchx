var React = require('react');
var {connect} = require('react-redux');
import Todo from 'Todo';
var TodoAPI = require('TodoAPI');

export var SaleHomeList = React.createClass({
  render: function () {
    var {todos, showCompleted, searchText,showSale, showBuy, showRent, showLease} = this.props;

    var showOnlyBuy = true;
    var renderTodos = () => {
      if (todos.length === 0) {
        return (
          <p className="container__message">Nothing To Do</p>
        );
      }

//      return TodoAPI.filterTodos(todos, showCompleted, searchText, showSale, showBuy, showRent, showLease).map((todo) => {
    return TodoAPI.filterTodos(todos, showCompleted, searchText, showSale, showOnlyBuy, showRent, showLease, 'sale').map((todo) => {
        return (
          <Todo key={todo.id} {...todo}/>
        );
      });
    };

    return (
      <div>
        {renderTodos()}
      </div>
    )
  }
});

export default connect(
  (state) => {
    return state;
  }
)(SaleHomeList);
