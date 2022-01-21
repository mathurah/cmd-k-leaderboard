import { useState, useEffect, useContext, useRef } from "react";
import Head from "next/head";
import { Box, toast } from "@chakra-ui/react";
import Header from "../components/Header";
import Container from "../components/Container";
import SignInModal from "../components/SignInModal";
import AddCompanyModal from "../components/AddCompanyModal";
import Footer from "../components/Footer";
import { useSupabase } from "../hooks/useSupabase.js";
import confetti from "canvas-confetti";

import {
  deleteVote,
  getAllOptions,
  getOption,
  getUserVotes,
  insertVote,
  updateOptionVotes,
  upsertUser,
} from "../api/supabase";
import { Store } from "../context/state";
import { ACTION_TYPES } from "../context/constants";
import MainTitle from "../components/MainTitle";
import Footnote from "../components/Footnote";
import Leaderboard from "../components/Leaderboard";
import AddSection from "../components/AddSection";
import TweetGrid from "../components/TweetGrid";
import { Toaster } from "react-hot-toast";

// init CommandBar
import { init } from 'commandbar';
if (typeof window !== "undefined") {
  init('aeda5a87');
}

export default function Home() {
  const [session, setSession] = useState(null);
  const {
    state: { showAdd, userVotes, filter, user, votesLoading },
    dispatch,
  } = useContext(Store);

  const supabase = useSupabase();

  async function getOptions(user) {
    dispatch({
      type: ACTION_TYPES.TOGGLE_VOTES_LOADING,
      loading: true,
    });

    const options = await getAllOptions(filter);

    dispatch({
      type: ACTION_TYPES.SET_VOTE_OPTIONS,
      voteOptions: options,
    });

    if (user) {
      await upsertUser(user);
      document.querySelector("#leaderboard").scrollIntoView();
      fetch(
        `${
          process.env.NEXT_PUBLIC_NODE_ENV === "dev"
            ? "http://localhost:3000"
            : "https://iwant-cmd-k.netlify.app"
        }/api/twitter/${user.identities[0].id}`
      )
        .then((res) => res.json())
        .then((res) => {
          dispatch({
            type: ACTION_TYPES.SET_TWITTER_INFO,
            twitterInfo: res,
          });
        })
        .catch((err) => {
          console.error(err.message);
        });
      const votes = await getUserVotes(user);
      dispatch({
        type: ACTION_TYPES.SET_USER_VOTES,
        userVotes: votes,
      });
      window.CommandBar.boot(user.id);
      console.log("normal boot");
    }

    else {
      window.CommandBar.boot("anon");
      console.log("anon boot");
    }

    dispatch({
      type: ACTION_TYPES.TOGGLE_VOTES_LOADING,
      loading: false,
    });
  }

  useEffect(() => {
    getOptions(user);
  }, [user, filter]);

  function toggleAdd() {
    if (user || showAdd) {
      dispatch({ type: ACTION_TYPES.TOGGLE_ADD });
    } else {
      dispatch({ type: ACTION_TYPES.TOGGLE_SIGN_IN, showSignIn: true });
    }
  }

  const Toggle = async (id) => {
    if (votesLoading) {
      return;
    }

    if (!user) {
      dispatch({
        type: ACTION_TYPES.TOGGLE_SIGN_IN,
      });
      return;
    }

    if (user) {
      dispatch({
        type: ACTION_TYPES.TOGGLE_VOTES_LOADING,
        loading: true,
      });

      const options = await getOption(id);

      const { id: optionId, votes: optionVotes } = options[0];

      const voted = userVotes.map((vote) => vote.option_id).includes(optionId);

      optionVotes += voted ? -1 : 1;

      const data = await updateOptionVotes(id, optionVotes);

      if (!voted) {
        confetti();
        const vote = await insertVote(optionId, user);
        dispatch({
          type: ACTION_TYPES.SET_USER_VOTES,
          userVotes: [...userVotes, { option_id: id }],
        });
      } else {
        const vote = await deleteVote(optionId, user);
        dispatch({
          type: ACTION_TYPES.SET_USER_VOTES,
          userVotes: userVotes.filter((vote) => vote.option_id !== id),
        });
      }
      getOptions();
    }
  };

  useEffect(() => {
    setSession(supabase.auth.session());
    supabase.auth.onAuthStateChange(async (_event, session) => {
      setSession(session);
      dispatch({
        type: ACTION_TYPES.SET_USER,
        user: session.user,
      });
      await upsertUser(session.user);
    });
  }, []);

  return (
    <>
      <div className="home">
        <Head>
          <title>I ❤️ cmd+k</title>
          <meta
            name="description"
            content="Vote for a commandbar on your favorite websites"
          />
          <link
            rel="preload"
            href="/fonts/Cartridge/Cartridge-Regular.ttf"
            as="font"
            crossOrigin=""
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@commandbar" />
          <meta name="twitter:title" content="I ❤️ ⌘K" />
          <meta
            name="twitter:description"
            content="Vote for a commandbar on your favorite websites"
          />

          <meta
            name="twitter:image"
            content="https://staticassets.commandbar.com/iwantcmdk/thumbnail.png"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <MainTitle />
        <Footnote />
        <TweetGrid />
        <Leaderboard toggle={Toggle} toggleAdd={toggleAdd} />
        <AddSection toggleAdd={toggleAdd} />
        <Footer />
        <SignInModal title="Sign In Modal" Toggle={Toggle} />
        <AddCompanyModal toggle={toggleAdd} toggleVote={Toggle} />
      </div>
      <Toaster />
    </>
  );
}
