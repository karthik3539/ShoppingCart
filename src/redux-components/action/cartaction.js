import callApi from "../../api/api-data";

/*1.create action varaibles****/ /*3. and import this variable in reducer***/

export const GET_ALL_DATA = "GET_ALL_DATA";

/*2.call the api function here to get data from api**/
export const FetchDataRequest = () => {
  return (dispatch) => {
    return callApi("products", "GET", null).then((res) => {
      dispatch(getalldata(res.data));
    });
  };
};

export function getalldata(data) {
  return { type: "GET_ALL_DATA", payload: data };
}
