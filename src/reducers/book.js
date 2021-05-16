const initialState = {
  book: [],
  newBook: [],
  bookList: [],
  category: [],
};

export default function book(state = initialState, action) {
  switch (action.type) {
    case "FETCH_BOOK":
      return {
        ...state,
        book: action.data,
      };

    case "FETCH_BOOK_LIST":
      return {
        ...state,
        bookList: action.data,
      };

    case "RESET_BOOK_LIST":
      return {
        ...state,
        bookList: state.book,
      };

    case "FETCH_NEW_BOOK":
      return {
        ...state,
        newBook: action.data,
      };

    case "FETCH_CATEGORY":
      return {
        ...state,
        category: action.data,
      };

    default:
      return state;
  }
}
