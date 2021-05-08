const initialState = {
  user: false,
  admin: false,
  userID: null,
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case "USER_LOGIN":
      return { ...state, user: true, admin: false };

    case "SET_USER_ID":
      return { ...state, userID: action.userID };

    case "ADMIN_LOGIN":
      return { ...state, user: false, admin: true };

    case "LOG_OUT":
      return { ...state, user: false, admin: false, userID: null };

    default:
      return state;
  }
}
