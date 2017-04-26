var uuid = require('node-uuid');
var moment = require('moment');

export var searchTextReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_SEARCH_TEXT':
      return action.searchText;
    default:
      return state;
  };
};

export var showCompletedReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_SHOW_COMPLETED':
      return !state;
    default:
      return state;
  }
};

export var showBuyReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_SHOW_BUY':
      return !state;
    default:
      return state;
  }
};

export var showSaleReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_SHOW_SALE':
      return !state;
    default:
      return state;
  }
};

export var showRentReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_SHOW_RENT':
      return !state;
    default:
      return state;
  }
};

export var showLeaseReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_SHOW_LEASE':
      return !state;
    default:
      return state;
  }
};

export var todosReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: uuid(),
          text: action.text,
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined,
          name: action.name,
          location: action.location,
          want: action.want,
          price: action.price,
          isAgent: action.isAgent,
          showSale : false,
          showBuy : false,
          showRent : false,
          showLease : false
        }
      ];
    case 'TOGGLE_TODO':
      return state.map((todo) => {
        if (todo.id === action.id) {
          var nextCompleted = !todo.completed;

          return {
            ...todo,
            completed: nextCompleted,
            completedAt: nextCompleted ? moment().unix() : undefined
          };
        } else {
          return todo;
        }
      });
    case 'ADD_TODOS':
      return [
        ...state,
        ...action.todos
      ];
    default:
      return state;
  }
};
