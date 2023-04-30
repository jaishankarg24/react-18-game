import React from "react";

interface Props {
  // cartItems: String[],
  cartItemsCount: number;
}
const NavBar = ({ cartItemsCount }: Props) => {
  return <div>NavBar: {cartItemsCount}</div>;
};

export default NavBar;
