export var setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText
  };
};

export var toggleShowCompleted = () => {
  return {
    type: 'TOGGLE_SHOW_COMPLETED'
  };
};

export var toggleShowBuy = () => {
  return {
    type: 'TOGGLE_SHOW_BUY'
  };
};

export var toggleShowSale = () => {
  return {
    type: 'TOGGLE_SHOW_SALE'
  };
};

export var toggleShowRent = () => {
  return {
    type: 'TOGGLE_SHOW_RENT'
  };
};

export var toggleShowLease = () => {
  return {
    type: 'TOGGLE_SHOW_LEASE'
  };
};

export var addTodo = (text, name, location, want, price) => {
  return {
    type: 'ADD_TODO',
    text,
    name,
    location,
    want,
    price
  };
};

export var addTodos = (todos) => {
  return {
    type: 'ADD_TODOS',
    todos
  };
};

export var toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  };
};
