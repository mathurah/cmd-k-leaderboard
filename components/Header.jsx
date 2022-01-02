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
            ? 2640
            : window.innerWidth > 700
            ? 3438 - 0.65 * window.innerWidth
            : 2301 - 0.657 * window.innerWidth,
        marginRight: window.innerWidth > 700 ? 10 : 0,
        duration: 70,
      },
      '>'
    );

    tl.to(
      document.querySelector('#CMDK'),
      {
        marginTop:
          window.innerWidth > 1220
            ? 2800
            : window.innerWidth > 700
            ? 3518 - 0.65 * window.innerWidth
            : 2361 - 0.657 * window.innerWidth,
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
        duration: 5,
      },
      '<-3'
    );

    tl.to(
      [document.querySelector('#UIGray')],
      {
        autoAlpha: 0,
        duration: 5,
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
                <div id="hello" className={styles.titleLong}>
                  <h1>...but most apps don't have them...</h1>
                </div>
              </div>
            </div>
            <div className={styles.headerContainerD}>
              <div className={styles.header}>
                <div id="hello" className={styles.title}>
                  <h1>let's change that, together!</h1>
                </div>
              </div>
            </div>
            <div className={styles.animations} id="trigger">
              <div id={'CMDK'} className={styles.animationBar1}>
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

              <div id={'UI'} className={styles.abstractUI1}>
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
