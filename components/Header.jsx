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
            <Marquee
              votes={[
                {
                  url: 'https://www.figma.com/',
                  company: 'Figma',
                  count: 1000,
                },
              ]}
            />
            <div className={styles.headerContainer}>
              <div className={styles.header}>
                {/* <h1>Hello</h1> */}

                <div className={styles.title}>
                  <h1>
                    <span>Vote for a </span>
                    <span>command menu </span>
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
