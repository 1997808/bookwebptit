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
