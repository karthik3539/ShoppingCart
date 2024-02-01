/*https://fakestoreapi.com/products*/

import axios from "axios";

//take an URL in a new varaiable;

let URL = "https://fakestoreapi.com";

//create a function which return api-data

export default function callApi(endpoint, method = "GET", body) {
  return axios({
    method,
    url: `${URL}/${endpoint}`,
    data: body,
  }).catch((err) => {
    console.log(err);
  });
}

//next import this api function in action/cartaction.js
