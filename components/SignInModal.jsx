import { useContext, useState } from "react";
import Button from "./Button";
import { FcGoogle } from "react-icons/fc";
import { FaTwitter, FaGithub } from "react-icons/fa";
import { Text, IconButton, Box } from "@chakra-ui/react";
import { signIn } from "../api/supabase";
import styles from "./Modal.module.css";
import { Store } from "../context/state";
import Modal from "./Modal";
const SignInModal = ({ Toggle }) => {
  const {
    state: { showSignIn: show },
    dispatch,
  } = useContext(Store);
  return (
    <Modal show={show} Toggle={Toggle}>
      <div className={styles.close}>
        <div onClick={Toggle} className={styles.closeX}></div>
      </div>
      <div className={styles.signIn}>
        <div className={styles.text}>Sign in to vote</div>
        <div className={styles.button}>
          <Button onClick={() => signIn("twitter")} style="add_section">
            Sign in to Twitter
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default SignInModal;
