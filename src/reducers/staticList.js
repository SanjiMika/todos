const staticList = (state = [], action) => {
  switch (action.type) {
    case 'ADD_STATIC':
      return [...state, action.data];
    default:
      return state;
  }
};

export default staticList;
