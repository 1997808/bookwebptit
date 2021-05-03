import { bookData } from "../assets/book";

const initialState = {
  cart: [],
};

export default function cart(state = initialState, action) {
  switch (action.type) {
    case "ADD_ITEM":
      const bookChosen = bookData.filter((items) => items.id === action.id)[0];
      var exist = state.cart.find((x) => x.id === action.id);
      return {
        ...state,
        cart: exist
          ? state.cart.map((x) =>
              x.id === action.id ? { ...exist, qty: exist.qty + 1 } : x
            )
          : [...state.cart, { ...bookChosen, qty: 1 }],
      };

    case "REDUCE_ITEM":
      var existBook = state.cart.find((x) => x.id === action.id);
      return {
        ...state,
        cart: state.cart.map((x) =>
          x.id === action.id
            ? { ...existBook, qty: existBook.qty > 1 ? existBook.qty - 1 : 1 }
            : x
        ),
      };

    case "REMOVE_ITEM":
      return {
        cart: state.cart.filter((x) => x.id !== action.id),
      };
    default:
      return state;
  }
}
