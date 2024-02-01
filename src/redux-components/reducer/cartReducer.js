import { combineReducers } from "redux";
import { GET_ALL_DATA } from "../action/cartaction";

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

    default:
      return state;
  }
};

const shopAll = combineReducers({ cartReducer });
export default shopAll;
