var redux = require('redux');
var {showSaleReducer, showBuyReducer, showRentReducer, showLeaseReducer,searchTextReducer, showCompletedReducer, todosReducer} = require('reducers');

export var configure = (initialState = {}) => {
  var reducer = redux.combineReducers({
    searchText: searchTextReducer,
    showCompleted: showCompletedReducer,
    showBuy: showBuyReducer,
    showSale: showSaleReducer,
    showRent: showRentReducer,
    showLease: showLeaseReducer,
    todos: todosReducer,
    // user : {
    //   uid: uidReducer,
    //   userType: userTypeReducer,              // clients, agents
    //   userPropertyId : userPropertyIdReducer, // { id : id, id : id }
    //   userFriendsId : userFriendsIdReducer,
    //   userMessageId : userMessageIdReducer,
    //   userChatRoomId : userChatRoomIdReducer,
    //   userDayCreated : userDayCreatedReducer
    // },
    //
    // propertys : propertysReducer,
    // chatRooms : chatRoomsReducer,
  });

  // Gundb
  // servers : serverReducer


  var store = redux.createStore(reducer, initialState, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
