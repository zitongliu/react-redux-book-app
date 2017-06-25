// State argument is not application state, only the state this reducers is reponsible for
// state = null is an ES6 syntax. It means when the state is undefined, we set it to null.
export default function(state = null, action) {
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }
  return state;
}
