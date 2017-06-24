export function selectBook(book) {
  // selectBook is an ActionCreator, it needs ot return an action,
  // An object with a type property
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
