var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

import LeaseHomeList from 'LeaseHomeList'
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
import AddProperty from 'AddProperty';

var TodoAppLeaseHome = React.createClass({
  render: function () {
    return (
      <div>
        <h1 className="page-title">Lease Home</h1>
          <div className="row">
            <div className="column small-centered small-12 medium-12 large-12">
            <div className="container">
              <TodoSearch/>
              <LeaseHomeList/>
              <AddTodo/>
              <AddProperty/>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = TodoAppLeaseHome;


// <div className="row">
//   <div className="column small-centered small-12 medium-12 large-12">
