var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

import BuyHomeList from 'BuyHomeList'
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
import AddProperty from 'AddProperty';

var TodoAppBuyHome = React.createClass({
  render: function () {
    return (
      <div>
        <h1 className="page-title">Buy Home</h1>
          <div className="row">
            <div className="column small-centered small-12 medium-12 large-12">
            <div className="container">
              <TodoSearch/>
              <BuyHomeList/>
              <AddTodo/>
              <AddProperty/>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = TodoAppBuyHome;


// <div className="row">
//   <div className="column small-centered small-12 medium-12 large-12">
