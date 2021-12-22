import React, { useState, useEffect } from "react";
import styles from "./Button.module.css";

const SignoutButton = ({
  children,
  onClick,
  disabled,
  type,
  style,
  ...props
}) => {
  return (
    <>
      <button className={`${styles.cta}`}>{children || "label"}</button>
    </>
  );
};

export default SignOutButton;

// TODO: fix button styling: make it dynamic
