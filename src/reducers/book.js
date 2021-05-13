const initialState = {
  book: [],
};

export default function book(state = initialState, action) {
  switch (action.type) {
    case "FETCH_BOOK":
      return {
        ...state,
        book: action.data,
      };

    default:
      return state;
  }
}
