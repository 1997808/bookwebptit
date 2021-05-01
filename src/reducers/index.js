// reducers/index.js

import { combineReducers } from "redux";
import cart from "./cart";
// định nghĩa các reducer khác ...

const rootReducer = combineReducers({
  cart,
  // nếu có reducer khác thì add thêm ở đây
});

export default rootReducer;
