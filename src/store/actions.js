export const ADD_PRODUCT = 'ADD_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const DELETE_ALL_PRODUCTS = 'DELETE_ALL_PRODUCTS';

export const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product
  }
};

export const deleteAllProducts = () => {
  return {
    type: DELETE_ALL_PRODUCTS,
    payload: null
  }
};

export const deleteProduct = (id) => {
  return {
    type: DELETE_PRODUCT,
    payload: id
  }
};