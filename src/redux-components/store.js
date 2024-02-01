import { applyMiddleware, legacy_createStore as createStore } from "redux";
import shopAll from "./reducer/cartReducer";
import { thunk } from "redux-thunk";

export const store = createStore(shopAll, applyMiddleware(thunk));
