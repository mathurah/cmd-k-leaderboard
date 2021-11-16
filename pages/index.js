import { useState, useEffect } from "react";
import Head from "next/head";

import { Box, Button, Text } from "@chakra-ui/react";

import Header from "../components/Header";
import Container from "../components/Container";
import Modal from "../components/Modal";

import { useSupabase } from "../hooks/useSupabase.js";

export default function Home() {
  const [modal, setModal] = useState(false);
  const [voteOptions, setVoteOptions] = useState([]);
  const [session, setSession] = useState();
  const [user, setUser] = useState();
  const supabase = useSupabase();

  async function getOptions() {
    const { data: options, error } = await supabase
      .from("Options")
      .select()
      .order("name", { ascending: true });

    setVoteOptions(options);
  }

  useEffect(() => {
    getOptions();
  }, []);

  const Toggle = async (id, selected, setSelected) => {
    let profileVotes = {};
    if (!user) {
      setModal(!modal);
      return;
    }

    if (user) {
      if (selected === false) {
        setSelected(true);

        const { data: options, error: optionsError } = await supabase
          .from("Options")
          .select("id, name, votes")
          .eq("id", id);

        if (optionsError) {
          console.log(optionsError);
        }

        const {
          id: optionId,
          name: optionName,
          votes: optionVotes,
        } = options[0];

        optionVotes++;

        const { data, error } = await supabase
          .from("Options")
          .update({ votes: optionVotes })
          .eq("id", id);

        if (error) {
          console.log(error);
        }

        getOptions();

        profileVotes = { optionId, optionName };

        //Store vode in supabase profiles table and
        const { data: profiles, error: profilesError } = await supabase
          .from("profiles")
          .insert([
            {
              profile_user_id: user.id,
              email: user.email,
              votes: profileVotes,
            },
          ]);
      }
    }
  };
  async function signInWithGithub() {
    await supabase.auth.signIn({
      provider: "github",
    });
  }
  async function signInWithGoogle() {
    await supabase.auth.signIn({
      provider: "google",
    });
  }

  async function handleSignOut() {
    let { error } = await supabase.auth.signOut();

    location.reload();

    if (error) {
      console.log(error);
    }
  }

  console.log(user);
  // Add auth for twitter when live
  // async function signInWithTwitter() {
  //   await supabase.auth.signIn({
  //     provider: "twitter",
  //   });
  // }
  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setUser(session.user);
    });
  }, []);

  return (
    <Box w="100vw" h="100vh" position="relative">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header user={user} session={session} handleSignOut={handleSignOut} />

      <Box
        width="100%"
        h="90vh"
        display="flex"
        justifyContent="center"
        as="main"
      >
        <Container options={voteOptions} Toggle={Toggle} />

        <Modal
          show={modal}
          title="My Modal"
          Toggle={Toggle}
          signInWithGithub={signInWithGithub}
          signInWithGoogle={signInWithGoogle}
        />
      </Box>
    </Box>
  );
}
