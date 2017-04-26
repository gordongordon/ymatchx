var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var TodoSearch = React.createClass({
  render: function () {
    var {dispatch, showCompleted, searchText, showSale, showBuy, showRent, showLease} = this.props;

    return (
      <div className="container__header">
        <div>
          <input type="search" ref="searchText" placeholder="Search todos" value={searchText} onChange={() => {
              var searchText = this.refs.searchText.value;
              dispatch(actions.setSearchText(searchText));
            }}/>
        </div>
        <div>
          <label>
            <input type="checkbox" ref="showCompleted" checked={showCompleted} onChange={() => {
                dispatch(actions.toggleShowCompleted());
              }}/>
            Show completed
          </label>
          <label>
            <input type="checkbox" ref="showSale" checked={showSale} onChange={() => {
                dispatch(actions.toggleShowSale());
              }}/>
            Show Sale
          </label>
          <label>
            <input type="checkbox" ref="showBuy" checked={showBuy} onChange={() => {
                dispatch(actions.toggleShowBuy());
              }}/>
            Show Buy
          </label>
          <label>
            <input type="checkbox" ref="showRent" checked={showRent} onChange={() => {
                dispatch(actions.toggleShowRent());
              }}/>
            Show Rent
          </label>
          <label>
            <input type="checkbox" ref="showLease" checked={showLease} onChange={() => {
                dispatch(actions.toggleShowLease());
              }}/>
            Show Lease
          </label>
        </div>
      </div>
    )
  }
});

export default connect(
  (state) => {
    return {
      showCompleted: state.showCompleted,
      searchText: state.searchText,
      showSale: state.showSale,
      showBuy : state.showBuy,
      showLease: state.showLease,
      showRent: state.showRent
    }
  }
)(TodoSearch);
