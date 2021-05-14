const initialState = {
  book: [],
  newBook: [],
};

export default function book(state = initialState, action) {
  switch (action.type) {
    case "FETCH_BOOK":
      return {
        ...state,
        book: action.data,
      };

    case "FETCH_NEW_BOOK":
      return {
        ...state,
        newBook: action.data,
      };

    default:
      return state;
  }
}
