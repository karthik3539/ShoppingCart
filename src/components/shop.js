import React, { useEffect } from "react";
import {
  FetchDataRequest,
  addtocart,
} from "../redux-components/action/cartaction";
import { connect } from "react-redux";
import MediaCard from "./Item";

/*connect- which is used to connect react component to redux*/

function Shop({ Products, FetchDataRequest, addtocart }) {
  useEffect(() => {
    FetchDataRequest();
  }, [FetchDataRequest]);

  console.log(Products);

  return (
    <div className="product-list">
      {Products.map((item) => {
        return (
          <MediaCard
            image={item.image}
            price={item.price}
            title={item.title}
            handleAddtocart={(item) => {
              addtocart(item);
            }}
          />
        );
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    Products: state.cartReducer.Products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    FetchDataRequest: () => dispatch(FetchDataRequest()),
    addtocart: (item) => dispatch(addtocart(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
