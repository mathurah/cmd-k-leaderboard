import React, { useRef } from 'react';
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

const CMDK = [1, 2, 3].map((_, i) => `Animation_Bar_${i + 1}.svg`);
const ABSTRACT_COLOR = 'AbstractColor.svg';
const ABSTRACT_GRAY = 'AbstractGray.svg';
const STARS = {
  big: 'BigStar.svg',
  small: 'SmallStar.svg',
  fat: 'FatStar.svg',
};
const SAD_FACE = {
  base: 'SadBase.svg',
  eyes: 'SadEyes.svg',
  brow: 'SadBrow.svg',
};

const Header = (reference, click) => {
  const supabase = useSupabase();
  const {
    state: { voteOptions, user, votesLoading, showAdd, showSignIn },
    dispatch,
  } = useContext(Store);

  const handleSignOut = async () => {
    await signOut(supabase);
    dispatch({ type: ACTION_TYPES.SIGN_OUT });
  };
  // const [duration, setDuration] = useState(3040);

  useEffect(() => {
    // window.onresize = () => {
    //   // if (duration !== 3040 && window.innerWidth > 700) {
    //   //   setDuration(3040);
    //   // } else if (duration === 3040 && window.innerWidth < 700) {
    //   //   setDuration(1120);
    //   // }
    // };

    // setDuration(window.innerWidth > 700 ? 3040 : 1120);

    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollToPlugin);

    function updatePercentage() {
      //percent.innerHTML = (tl.progress() *100 ).toFixed();
      tl.progress();
      // console.log(tl.progress());
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
        markers: false, //set to true for debugging
      },
    });

    tl.set(
      [
        document.querySelector('#UIGray'),
        document.querySelector('#CMDK1'),
        document.querySelector('#CMDK2'),
      ],
      { autoAlpha: 0 }
    );

    tl.from(
      document.querySelector('#CMDK'),
      {
        y: -250,
        duration: 20,
      },
      '>'
    );

    tl.from(
      document.querySelector('#UI'),
      {
        y: -150,
        duration: 20,
      },
      '<'
    );

    tl.to(
      document.querySelector('#CMDK1'),
      {
        autoAlpha: 1,
        duration: 0,
      },
      '>'
    );

    tl.to(
      document.querySelector('#CMDK0'),
      {
        autoAlpha: 0,
        duration: 0,
      },
      '<'
    );

    tl.to(
      document.querySelector('#starsLeft'),
      {
        display: 'block',
        duration: 0,
      },
      '<'
    );

    tl.to(
      document.querySelector('#CMDK2'),
      {
        autoAlpha: 0,
        duration: 10,
      },
      '>'
    );

    tl.to(
      document.querySelector('#CMDK2'),
      {
        autoAlpha: 1,
        duration: 0,
      },
      '>'
    );

    tl.to(
      document.querySelector('#CMDK1'),
      {
        autoAlpha: 0,
        duration: 0,
      },
      '<'
    );

    tl.to(
      document.querySelector('#starsRight'),
      {
        display: 'block',
        duration: 0,
      },
      '<'
    );

    tl.to(
      document.querySelector('#UI'),
      {
        marginTop:
          window.innerWidth > 1220
            ? 2640 - 1100
            : window.innerWidth > 700
            ? 3438 - 1100 - 0.65 * window.innerWidth
            : 2301 - 1100 - 0.657 * window.innerWidth,
        // marginRight: window.innerWidth > 700 ? 10 : 0,
        duration: 70,
      },
      '>'
    );

    tl.to(
      document.querySelector('#CMDK'),
      {
        marginTop:
          window.innerWidth > 1220
            ? 2800 - 1100
            : window.innerWidth > 700
            ? 3518 - 1100 - 0.65 * window.innerWidth
            : 2361 - 1100 - 0.657 * window.innerWidth,
        // backgroundColor: 'red',
        // scale: 2,
        duration: 70,
      },
      '<'
    );

    tl.to(
      [
        document.querySelector('#CMDK'),
        document.querySelector('#CMDK2'),
        document.querySelector('#UIColor'),
      ],
      {
        autoAlpha: 20,
        duration: 0,
      },
      '<'
    );

    tl.to(
      [document.querySelector('#UIGray')],
      {
        autoAlpha: -19,
        duration: 0,
      },
      '<'
    );

    tl.to(
      [
        document.querySelector('#CMDK'),
        document.querySelector('#CMDK2'),
        document.querySelector('#UIColor'),
      ],
      {
        autoAlpha: 0,
        duration: 20,
      },
      '<'
    );

    tl.to(
      document.querySelector('#UIGray'),
      {
        autoAlpha: 1,
        duration: 14,
      },
      '<'
    );

    tl.to(
      document.querySelector('#sad'),
      {
        display: 'flex',
        duration: 0,
      },
      '>+4'
    );

    tl.to(
      [document.querySelector('#CMDK'), document.querySelector('#CMDK0')],
      {
        autoAlpha: 1,
        duration: 3,
      },
      '-=18'
    );

    tl.to(
      [document.querySelector('#UIColor')],
      {
        autoAlpha: 1,
        duration: 3,
      },
      '<-20'
    );

    tl.to(
      [document.querySelector('#UIGray')],
      {
        autoAlpha: 0,
        duration: 3,
      },
      '<+2'
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
      <div reference={reference} id="start" className={styles.main}>
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
                  <div id="hello" className={styles.title}>
                    <h1>
                      <span>
                        <span>Vote for a </span> <span> command menu </span>
                      </span>
                      <span>in your favorite apps</span>
                    </h1>
                  </div>
                </div>

                <div className={styles.headerButtonGroup}>
                  <a href="leaderboard">
                    <Button style="cta">Vote Now</Button>
                  </a>
                  {user && (
                    <Button style="signOut" onClick={() => handleSignOut()}>
                      <span className={styles.signOut}>
                        {' '}
                        sign out @{user.user_metadata.user_name}{' '}
                        <svg
                          className={styles.signOutSvg}
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.83027 2.46281C3.79174 2.534 2.21916 4.22627 2.28487 6.27068C2.35018 8.30373 4.04833 9.88179 6.08686 9.8106C8.11971 9.73962 9.70913 8.04107 9.63266 6.01409L11.7732 5.93366C11.8911 9.14741 9.36989 11.8393 6.16162 11.9513C2.94199 12.0638 0.250481 9.55391 0.143926 6.33976C0.0373713 3.12561 2.53588 0.434502 5.75551 0.322071L5.83027 2.46281ZM11.73 4.69578L10.1433 3.21616L6.74016 6.86556L5.17697 5.40786L8.58009 1.75846L6.99339 0.278843L11.5702 0.119019L11.73 4.69578Z"
                            fill="white"
                          />
                        </svg>{' '}
                      </span>
                    </Button>
                  )}
                </div>
              </div>
              <div id="title2" className={styles.headerContainerB}>
                <div className={`${styles.header} ${styles.header2}`}>
                  <div className={styles.title}>
                    <h1>We love command menus</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.headerContainerC}>
              <div className={`${styles.header} ${styles.header3}`}>
                <div id="hello" className={styles.titleLong}>
                  <h1>...but most apps don't have them...</h1>
                </div>
              </div>
            </div>
            <div className={styles.headerContainerD}>
              <div className={`${styles.header} ${styles.header3}`}>
                <div id="hello" className={styles.title}>
                  <h1>let's change that, together!</h1>
                </div>
              </div>
            </div>
            <div
              className={styles.animations}
              style={showSignIn || showAdd ? { display: 'none' } : {}}
              id="trigger"
            >
              <div id={'CMDK'} className={styles.animationBar}>
                <img
                  id="CMDK0"
                  className={styles.stackImg}
                  src={CMDK[0]}
                  alt="animation bar"
                />
                <img
                  id="CMDK1"
                  className={styles.stackImg}
                  src={CMDK[1]}
                  alt="animation bar"
                />
                <img
                  id="CMDK2"
                  className={styles.stackImg}
                  src={CMDK[2]}
                  alt="animation bar"
                />
              </div>

              <div id={'UI'} className={styles.abstractUI}>
                <img
                  id="UIColor"
                  className={styles.stackImg}
                  src={ABSTRACT_COLOR}
                  alt="abstract color"
                />
                <img
                  id="UIGray"
                  className={styles.stackImg}
                  src={ABSTRACT_GRAY}
                  alt="abstract gray"
                />
                <div className={styles.starsLeft}>
                  <StarGroup id={'starsLeft'} />
                </div>
                <div className={styles.starsRight}>
                  <StarGroup id={'starsRight'} />
                </div>
                <div id={'sad'} className={styles.sadFaceContainer}>
                  <SadFace />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const StarGroup = ({ id }) => {
  return (
    <div className={styles.starGroup} id={id}>
      <img className={styles.bigStar} src={STARS.big} />
      <img className={styles.smallStar} src={STARS.small} />
      <img className={styles.fatStar} src={STARS.fat} />
    </div>
  );
};

const SadFace = () => {
  return (
    <div className={styles.sadFace}>
      <div className={styles.sadFaceBase}>
        <img src={SAD_FACE.base} alt="sad face" />
      </div>
      <div className={styles.sadFaceEyes}>
        <img src={SAD_FACE.eyes} alt="sad face eyes" />
      </div>
      <div className={styles.sadFaceBrows}>
        <img
          className={styles.sadFaceBrowsL}
          src={SAD_FACE.brow}
          alt="sad face brows"
        />
        <div className={styles.sadFaceBrowsM} />
        <img
          className={styles.sadFaceBrowsR}
          src={SAD_FACE.brow}
          alt="sad face brows"
        />
      </div>
    </div>
  );
};

export default Header;
