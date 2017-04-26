var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

import TodoList from 'TodoList'
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
import AddProperty from 'AddProperty';

var TodoApp = React.createClass({
  render: function () {
    return (
      <div>
        <h1 className="page-title">Todo App</h1>
          <div className="row">
            <div className="column small-centered small-12 medium-12 large-12">
            <div className="container">
              <TodoSearch/>
              <TodoList/>
              <AddTodo/>
              <AddProperty/>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = TodoApp;


// <div className="row">
//   <div className="column small-centered small-12 medium-12 large-12">
