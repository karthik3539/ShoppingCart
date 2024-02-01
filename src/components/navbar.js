import React from "react";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-primary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Shopping Cart
          </a>

          <div class="collapse navbar-collapse text-end" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 text-end">
              <Link to="/">
                <li class="nav-item">
                  <a class="nav-link " aria-current="page" href="#">
                    Shop
                  </a>
                </li>
              </Link>
              <Link to="/cart">
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Cart
                  </a>
                </li>
              </Link>
            </ul>
          </div>

          <div className="Basket">
            <ShoppingBasketOutlinedIcon />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
