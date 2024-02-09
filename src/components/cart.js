import React from "react";
import { connect } from "react-redux";

function Cart({ items }) {
  return (
    <div>
      {items.map((i) => {
        return <li>{i.title}</li>;
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    items: state.cartReducer.items,
  };
};

export default connect(mapStateToProps)(Cart);
