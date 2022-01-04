import { useContext } from 'react';
import Button from './Button';
import { FcGoogle } from 'react-icons/fc';
import { FaTwitter, FaGithub } from 'react-icons/fa';
import { Text, IconButton, Box } from '@chakra-ui/react';
import { signIn } from '../api/supabase';
import styles from './Modal.module.css';
import { Store } from '../context/state';
import Modal from './Modal';
const SignInModal = ({ Toggle }) => {
  const {
    state: { showSignIn: show },
    dispatch,
  } = useContext(Store);
  return (
    <Modal show={show} Toggle={Toggle}>
      <div className={styles.close}>
        <div onClick={Toggle} className={styles.closeX}>
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 18.0284L6 8.97872L8.9717 6L17.9434 15.0213L27.0566 6L30 8.92199L20.9151 18.0284L29.9434 27.1064L27.0566 30L17.9434 21.0071L8.9717 29.9433L6.0566 27.0213L15 18.0284Z"
              fill="white"
            />
            <path
              d="M4.58412 7.56618L3.17712 8.97651L4.5819 10.389L12.1793 18.0284L4.63849 25.611L3.23373 27.0235L4.64072 28.4338L7.55582 31.3558L8.96722 32.7705L10.3831 31.3603L17.95 23.8234L25.6518 31.4236L27.0676 32.8207L28.4725 31.4125L31.3593 28.5189L32.7663 27.1086L31.3615 25.6961L23.738 18.0306L31.4159 10.3345L32.8319 8.91515L31.409 7.50262L28.4656 4.58063L27.0586 3.18382L25.6496 4.57864L17.9544 12.1961L10.3898 4.58969L8.97393 3.16599L7.55582 4.58746L4.58412 7.56618Z"
              stroke="black"
              stroke-opacity="0.16"
              stroke-width="4"
            />
          </svg>
        </div>
      </div>
      <div className={styles.signIn}>
        <div className={styles.text}>Sign in to vote</div>
        <div className={styles.button}>
          <Button onClick={() => signIn('twitter')} style="add_section">
            Sign in to Twitter
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default SignInModal;
