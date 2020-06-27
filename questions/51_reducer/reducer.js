//Redux Practice
//You will be expanding on the reducer function

//types are defined here.
const types = {
  ADD_TODO: "ADD_TODO",
  DELETE_TODO: "DELETE_TODO",
  COMPLETE_TODO: "COMPLETE_TODO",
};

const initialState = [
  {
    item: "Use Redux",
    completed: false,
    id: 0,
  },
];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.ADD_TODO:
      return {
        type: TYPES.ADD_TODO,
        text,
      };
    case TYPES.DELETE_TODO:
      return state.filter((curr) => {
        curr.id !== action.id;
      });
    case TYPES.COMPLETE_TODO:
      return {
        type: TYPES.COMPLETE_TODO,
        text,
      };
    default:
      return state;
  }
};

module.exports = { types, initialState, reducer };
