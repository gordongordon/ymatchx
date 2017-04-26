var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');


var TodoAppRentHome = require('TodoAppRentHome');
var Main = require('Main');

var TodoAppLeaseHome = require('TodoAppLeaseHome');
var TodoAppBuyHome = require('TodoAppBuyHome');
var TodoAppSaleHome = require('TodoAppSaleHome');




var TodoApp = require('TodoApp');
var actions = require('actions');
var store = require('configureStore').configure();
var TodoAPI = require('TodoAPI');

store.subscribe(() => {
  var state = store.getState();
  console.log('New state', state);
  TodoAPI.setTodos(state.todos);
});

var initialTodos = TodoAPI.getTodos();
store.dispatch(actions.addTodos(initialTodos));

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
      <IndexRoute component={TodoApp}/>
      <Route path="rent" component={TodoAppRentHome} />
      <Route path="lease" component={TodoAppLeaseHome} />
        <Route path="buy" component={TodoAppBuyHome} />
        <Route path="sale" component={TodoAppSaleHome} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
