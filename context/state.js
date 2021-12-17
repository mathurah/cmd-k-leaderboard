import { useReducer, createContext, useEffect } from 'react';
import { ACTION_TYPES } from './constants';
import { getAllOptions, getUserVotes } from '../api/supabase';

export const Store = createContext();

export const StoreProvider = ({ reducer, initialState, children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
};
