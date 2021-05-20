export const addItem = (id) => {
  return {
    type: "ADD_ITEM",
    id,
  };
};

export const reduceItem = (id) => {
  return {
    type: "REDUCE_ITEM",
    id,
  };
};

export const removeItem = (id) => {
  return {
    type: "REMOVE_ITEM",
    id,
  };
};

export const emptyCart = (id) => {
  return {
    type: "EMPTY_CART",
    id,
  };
};

export const userAuth = () => {
  return {
    type: "USER_LOGIN",
  };
};

export const setUserID = (userID) => {
  return {
    type: "SET_USER_ID",
    userID,
  };
};

export const adminAuth = () => {
  return {
    type: "ADMIN_LOGIN",
  };
};

export const logout = () => {
  return {
    type: "LOG_OUT",
  };
};

export const fetchBook = (data) => {
  return {
    type: "FETCH_BOOK",
    data,
  };
};

export const fetchBookList = (data) => {
  return {
    type: "FETCH_BOOK_LIST",
    data,
  };
};

export const resetBookList = () => {
  return {
    type: "RESET_BOOK_LIST",
  };
};

export const fetchNewBook = (data) => {
  return {
    type: "FETCH_NEW_BOOK",
    data,
  };
};

export const fetchBookForCart = (data) => {
  return {
    type: "FETCH_BOOK_FOR_CART",
    data,
  };
};

export const fetchCategory = (data) => {
  return {
    type: "FETCH_CATEGORY",
    data,
  };
};
