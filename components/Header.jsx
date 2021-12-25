import React from "react";
import styles from "./Header.module.css";
import { useState, useContext } from "react";
import { Store } from "../context/state";
import { useSupabase } from "../hooks/useSupabase.js";
import { signOut } from "../api/supabase";
import Button from "./Button";
import Marquee from "./Marquee";
const Header = () => {
  const supabase = useSupabase();
  const {
    state: { voteOptions, user, votesLoading },
    dispatch,
  } = useContext(Store);
  return (
    <>
      <div className={styles.main}>
        <div className={styles.background}>
          <div className={styles.aboveBG}>
            <Marquee
              votes={
                votesLoading
                  ? []
                  : voteOptions
                      // .sort((a, b) => b.votes - a.votes)
                      .slice(0, 5)
                      .map(({ name, url, votes }) => ({
                        company: name,
                        count: votes,
                        url,
                      }))
              }
            />
            <div className={styles.headerContainer}>
              <div className={styles.header}>
                <div className={styles.title}>
                  <h1>
                    <span>
                      <span>Vote for a </span> <span> command menu </span>
                    </span>
                    <span>in your favorite apps</span>
                  </h1>
                </div>
              </div>

              <Button style="cta">Vote Now</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
