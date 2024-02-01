import React, { useEffect } from "react";
import { FetchDataRequest } from "../redux-components/action/cartaction";
import { connect } from "react-redux";

/*connect- which is used to connect react component to redux*/

function Shop({ Products, FetchDataRequest }) {
  useEffect(() => {
    FetchDataRequest();
  }, [FetchDataRequest]);

  console.log(Products);

  return (
    <div>
      {Products.map((e) => {
        return <li>{e.title}</li>;
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    Products: state.cartReducer.Products,
  };
};

export default connect(mapStateToProps, { FetchDataRequest })(Shop);
