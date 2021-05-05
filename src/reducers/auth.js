const initialState = {
  user: false,
  admin: false,
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case "USER_LOGIN":
      return {
        user: true,
        admin: false,
      };

    case "ADMIN_LOGIN":
      return {
        user: false,
        admin: true,
      };

    case "LOG_OUT":
      return {
        user: false,
        admin: false,
      };
    default:
      return state;
  }
}
