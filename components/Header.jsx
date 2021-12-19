import React from "react";
import styles from "./Header.module.css";

import { useSupabase } from "../hooks/useSupabase.js";
const Header = ({ user, handleSignOut }) => {
  const supabase = useSupabase();
  async function signOut() {
    await supabase.auth.signOut();
  }
  return (
    <>
      <div className={styles.background}>HII</div>
    </>
  );
};

export default Header;
