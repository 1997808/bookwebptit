const initialState = {
  cart: [],
};

export default function cart(state = initialState, action) {
  switch (action.type) {
    case "ADD_ITEM":
      console.log(state.cart);
      const exist = state.cart.find((x) => x.id === action.id);
      return {
        ...state,
        cart: exist
          ? state.cart.map((x) =>
              x.id === action.id ? { ...exist, qty: exist.qty + 1 } : x
            )
          : [...state.cart, { id: action.id, qty: 1 }],
      };
    case "REMOVE_ITEM":
      return {
        cart: state.cart.filter((x) => x.id !== action.id),
      };
    default:
      return state;
  }
}
