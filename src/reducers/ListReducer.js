const listReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_NEW_LIST':
      return [...state, action.listName];
    case 'DELETE_LIST':
      const newState=[...state]
      newState.splice(action.listIndex,1);
      return newState;
    default:
      return state
  };
};

export default listReducer;
