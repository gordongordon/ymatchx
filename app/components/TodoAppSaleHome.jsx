var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

import SaleHomeList from 'SaleHomeList'
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
import AddProperty from 'AddProperty';

var TodoAppSaleHome = React.createClass({
  render: function () {
    return (
      <div>
        <h1 className="page-title">Sale Home</h1>
          <div className="row">
            <div className="column small-centered small-12 medium-12 large-12">
            <div className="container">
              <TodoSearch/>
              <SaleHomeList/>
              <AddTodo/>
              <AddProperty/>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = TodoAppSaleHome;


// <div className="row">
//   <div className="column small-centered small-12 medium-12 large-12">
