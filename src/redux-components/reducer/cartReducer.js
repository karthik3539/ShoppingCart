import { combineReducers } from "redux";
import { GET_ALL_DATA, ADD_TO_CART } from "../action/cartaction";

const IntialState = {
  Products: [],
  Cart: [],
  noofProductsinCart: 0,
};

const cartReducer = (state = IntialState, action) => {
  switch (action.type) {
    case GET_ALL_DATA:
      return {
        ...state,
        Products: action.payload,
      };

    case ADD_TO_CART:
      /* if (state.noofProductsinCart == 0) {
        let cart = {
          id: action.payload.id,
          qauntity: 1,
          title: action.payload.title,
          image: action.payload.image,
          price: action.payload.price,
        };
        state.Cart.push(cart);
      } else {
        let check = false;
        state.Cart.map((i, key) => {
          if (i.id == action.payload.id) {
            state.Cart[key].qauntity++;
            check = true;
          }
        });
        if (!check) {
          let _cart = {
            id: action.payload.title,
            qauntity: 1,
            title: action.payload.title,
            image: action.payload.image,
            price: action.payload.price,
          };
          state.Cart.push(_cart);
         
        }
        console.log(state.Cart);
      }*/
      return {
        ...state,
        Cart: [state.Cart, action.payload],
        noofProductsinCart: state.noofProductsinCart + 1,
      };

    default:
      return state;
  }
};

const shopAll = combineReducers({ cartReducer });
export default shopAll;
