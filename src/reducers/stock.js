const initialState = {
  import: [],
  bookData: [],
};

export default function stock(state = initialState, action) {
  switch (action.type) {
    case "ADD_ITEM_STOCK":
      const bookChosen = state.bookData.filter(
        (items) => items.id === action.id
      )[0];
      return {
        ...state,
        import: [
          ...state.import,
          {
            ...bookChosen,
            qty: action.qty,
            importPrice: action.importPrice,
            importID: "" + action.id + action.qty + action.importPrice,
          },
        ],
      };

    case "REMOVE_ITEM_STOCK":
      return {
        ...state,
        import: state.import.filter((x) => x.importID !== action.importID),
      };

    case "EMPTY_IMPORT":
      return {
        ...state,
        import: [],
      };

    case "FETCH_BOOK_FOR_IMPORT":
      return {
        ...state,
        bookData: action.data,
      };

    default:
      return state;
  }
}
