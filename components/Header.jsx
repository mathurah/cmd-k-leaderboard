import React from 'react';
import styles from './Header.module.css';
import { useState, useContext } from 'react';
import { Store } from '../context/state';
import { useSupabase } from '../hooks/useSupabase.js';
import { signOut } from '../api/supabase';
import Button from './Button';
import Marquee from './Marquee';
import { ACTION_TYPES } from '../context/constants';
const Header = () => {
  const supabase = useSupabase();
  const {
    state: { voteOptions, user, votesLoading },
    dispatch,
  } = useContext(Store);

  const handleSignOut = async () => {
    await signOut(supabase);
    dispatch({ type: ACTION_TYPES.SIGN_OUT });
  };

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

              <div className={styles.headerButtonGroup}>
                <Button style="cta">Vote Now</Button>
                {user && (
                  <Button style="signOut" onClick={() => handleSignOut()}>
                    sign out @{user.user_metadata.user_name}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
