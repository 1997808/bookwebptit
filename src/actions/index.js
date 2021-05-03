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
