//import React from "react";

import styles from "./Button.module.css";

interface Props {
  children: string;
  onClick: () => void;
  //   color: string;
  color?: "primary" | "secondary" | "danger";
}

const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    // <button className={"btn btn-" + color} onClick={onClick}>
    //   {children}
    // </button>
    <button
      className={[styles.btn, styles["btn-" + color]].join(" ")}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
