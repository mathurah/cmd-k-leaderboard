import React from 'react';
import styles from './Header.module.css';
import './Header.module.css';
import { useState, useContext, useLayoutEffect, useEffect } from 'react';
import { Store } from '../context/state';
import { useSupabase } from '../hooks/useSupabase.js';
import { signOut } from '../api/supabase';
import Button from './Button';
import Marquee from './Marquee';
import { ACTION_TYPES } from '../context/constants';
// import { Tween, Timeline } from 'react-gsap';
// import { Controller, Scene } from 'react-scrollmagic';
import { gsap, Linear, Power4 } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';

const CMDK1 = 'Animation_Bar_1.svg';
const ABSTRACT_COLOR = 'AbstractColor.svg';

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
  const [duration, setDuration] = useState(3040);

  useEffect(() => {
    window.onresize = () => {
      if (duration !== 3040 && window.innerWidth > 700) {
        setDuration(3040);
      } else if (duration === 3040 && window.innerWidth < 700) {
        setDuration(1120);
      }
    };

    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollToPlugin);

    function updatePercentage() {
      //percent.innerHTML = (tl.progress() *100 ).toFixed();
      tl.progress();
      console.log(tl.progress());
    }
    // var autoScroll = gsap.timeline({}).to(window, {
    //   duration: 100,
    //   scrollTo: { y: 3040, autoKill: false },
    // });
    var tl = gsap.timeline({
      onUpdate: updatePercentage,
      paused: false,
      scrollTrigger: {
        trigger: document.querySelector('#start'),
        pin: false,
        start: 'top top',
        scrub: true,
        end: 'bottom bottom',
        markers: true,
      },
    });

    tl.from(
      document.querySelector('#CMDK1'),
      {
        opacity: 0.7,
        y: -250,
        duration: 20,
      },
      '<'
    );

    tl.from(
      document.querySelector('#UI1'),
      {
        opacity: 0.7,
        y: -150,
        duration: 20,
      },
      '<'
    );

    tl.to(
      document.querySelector('#CMDK1'),
      {
        opacity: -1000,
        duration: 80,
        scrollTo: { y: 3500, autoKill: false },
      },
      '>'
    );

    tl.to(
      document.querySelector('#UI1'),
      {
        opacity: -1000,
        duration: 80,
      },
      '<'
    );

    var ScrollMagic = require('scrollmagic');

    var controller = new ScrollMagic.Controller();

    var scene = new ScrollMagic.Scene({
      triggerElement: document.querySelector('#trigger'),
      triggerHook: 'onLeave',
      duration: '100%',
    })
      .setTween(tl)
      // .setTween(autoScroll)
      .addTo(controller);
  }, []);

  return (
    <>
      <div id="start" className={styles.main}>
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
            <div />
            <div className={styles.headerWrapper}>
              <div className={styles.headerContainerA}>
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
              <div id="title2" className={styles.headerContainerB}>
                <div className={styles.header}>
                  <div className={styles.title}>
                    <h1>We love command menus</h1>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.headerContainerC}>
              <div className={styles.header}>
                <div className={styles.titleLong}>
                  <h1>...but most apps don't have them...</h1>
                </div>
              </div>
            </div>
            <div className={styles.headerContainerD}>
              <div className={styles.header}>
                <div className={styles.title}>
                  <h1>let's change that, together!</h1>
                </div>
              </div>
            </div>
            <div className={styles.animations} id="trigger">
              <div id={'CMDK1'} className={styles.animationBar1}>
                <img src={CMDK1} alt="animation bar" />
              </div>
              <div id={'UI1'} className={styles.abstractUI1}>
                <img src={ABSTRACT_COLOR} alt="abstract color" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
