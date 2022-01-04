import { FILTER_ENUM, ACTION_TYPES } from './constants';
export const reducer = (state = initialState, action) => {
    console.log({action, state});
  switch (action.type) {
    // case ACTION_TYPES.TOGGLE_SIGN_IN:
    //   return {
    //     ...state,
    //     showSignIn:
    //       action.showSignIn !== undefined
    //         ? action.showSignIn
    //         : !state.showSignIn,
    //   };
    case ACTION_TYPES.TOGGLE_ADD:
      return {
        ...state,
        showAdd: action.showAdd !== undefined ? action.showAdd : !state.showAdd,
      };
    case ACTION_TYPES.TOGGLE_VOTES_LOADING:
      return {
        ...state,
        votesLoading:
          action.loading !== undefined ? action.loading : !state.votesLoading,
      };
    case ACTION_TYPES.TOGGLE_FILTER:
      return {
        ...state,
        filter: FILTER_ENUM[action.filter],
      };
    case ACTION_TYPES.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    // case ACTION_TYPES.SIGN_OUT:
    //   return {
    //     ...state,
    //     user: null,
    //     userVotes: [],
    //   };
    case ACTION_TYPES.SET_VOTE_OPTIONS:
      return {
        ...state,
        voteOptions: action.voteOptions,
      };
    case ACTION_TYPES.SET_USER_VOTES:
      return {
        ...state,
        userVotes: action.userVotes,
      };
    default:
      return state;
  }
};
