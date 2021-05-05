// reducers/index.js

import { combineReducers } from "redux";
import cart from "./cart";
import auth from "./auth";
// định nghĩa các reducer khác ...

const rootReducer = combineReducers({
  cart,
  auth,
  // nếu có reducer khác thì add thêm ở đây
});

export default rootReducer;
