export const ACTION_TYPES = {
  TOGGLE_SIGN_IN: 'TOGGLE_SIGN_IN',
  TOGGLE_ADD: 'TOGGLE_ADD',
  SET_USER: 'SET_USER',
  TOGGLE_VOTES_LOADING: 'TOGGLE_VOTES_LOADING',
  SET_VOTE_OPTIONS: 'SET_VOTE_OPTIONS',
  SET_USER_VOTES: 'SET_USER_VOTES',
  TOGGLE_FILTER: 'TOGGLE_FILTER',
  SIGN_OUT: 'SIGN_OUT',
};

export const FILTER_ENUM = {
  TOP: 'votes',
  NEW: 'created_at',
};

export const initialState = {
  showSignIn: false,
  showAdd: false,
  user: null,
  votesLoading: false,
  voteOptions: [],
  userVotes: [],
  filter: FILTER_ENUM.TOP,
  twitterInfo: [],
};
