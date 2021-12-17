export const initialState = {
  showSignIn: false,
  showAdd: false,
  user: null,
  votesLoading: false,
  voteOptions: [],
  userVotes: [],
  filter: 'votes',
};

const FILTER_ENUM = {
  TOP: 'votes',
  NEW: 'created_at',
};

export const ACTION_ENUM = {
  SHOW_SIGN_IN: 'SHOW_SIGN_IN',
  SHOW_ADD: 'SHOW_ADD',
  SET_USER: 'SET_USER',
  SET_VOTES_LOADING: 'SET_VOTES_LOADING',
  SET_VOTE_OPTIONS: 'SET_VOTE_OPTIONS',
  SET_USER_VOTES: 'SET_USER_VOTES',
  SET_FILTER: 'SET_FILTER',
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_SIGN_IN':
      return {
        ...state,
        showSignIn: !state.showSignIn,
      };
    case 'TOGGLE_ADD':
      return {
        ...state,
        showAdd: !state.showAdd,
      };
    case 'TOGGLE_VOTES_LOADING':
      return {
        ...state,
        votesLoading: !state.votesLoading,
      };
    case 'TOGGLE_FILTER':
      return {
        ...state,
        filter: FILTER_ENUM[action.filter],
      };
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      };
    case 'SET_VOTE_OPTIONS':
      return {
        ...state,
        voteOptions: action.voteOptions,
      };
    default:
      return state;
  }
};
