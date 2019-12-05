import { ADD_PRODUCT, DELETE_PRODUCT, DELETE_ALL_PRODUCTS } from "./actions";

const initialState = {
  products: [
    {
      id: 1,
      title: "pants",
      description: "very good pants",
      price: 777.77,
      image: "pants.jpg",
    },
    {
      id: 2,
      title: "socks",
      description: "very good socks",
      price: 222.22,
      image: "socks.jpg",
    },
    {
      id: 3,
      title: "underwear",
      description: "very good underwear",
      price: 300,
      image: "under.jpg",
    },
    {
      id: 4,
      title: "fleece",
      description: "excellent fleece",
      price: 999.98,
      image: "fleece.jpg",
    }
  ]
};

export default function reducer(state = initialState, action) {
  let products = state.products;
  switch (action.type) {
    
    case ADD_PRODUCT:
      
       console.log('reducer add');
       console.log(action);
       console.log(products);
      products.push(action.payload)
       console.log('reducer add done');
       console.log(products);
      return { ...state, products }

    case DELETE_PRODUCT:
      console.log('reducer del1');
      console.log(action);
      console.log(products);

      products = products.filter((item) => item.id != action.payload);
      return { ...state, products }

    case DELETE_ALL_PRODUCTS:
      // console.log('reducer');
      // console.log(action);
      // console.log(products);
      products = [];
      return { ...state, products }

    default: return state
  }
}