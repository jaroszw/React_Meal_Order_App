import React, { useContext } from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

import mealsImage from "../../assets/meals.jpg";
import CartContext from "../../store/cart-context";

const Header = (props) => {
  const cartCtx = useContext(CartContext);

  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onClick={props.onShowCart}>Cart</HeaderCartButton>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="bg-image" />
      </div>
    </React.Fragment>
  );
};

export default Header;
