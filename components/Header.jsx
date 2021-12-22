import React from 'react';
import styles from './Header.module.css';

import { useSupabase } from '../hooks/useSupabase.js';
import Button from './Button';
import Marquee from './Marquee';
const Header = ({ user, handleSignOut }) => {
  const supabase = useSupabase();
  async function signOut() {
    await supabase.auth.signOut();
  }
  return (
    <>
      <div className={styles.main}>
        <div className={styles.background}>
          <div className={styles.aboveBG}>
            <Marquee></Marquee>
            <div className={styles.headerContainer}>
              <div className={styles.header}>
                {/* <h1>Hello</h1> */}

                <h1>
                  Vote for a command menu <br></br> in your favorite apps
                </h1>
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
